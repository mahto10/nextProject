const { hash, compare } = require("bcrypt");
const redisClient = require("../redis/redisClient");
const { generateRandomNumber } = require("../utils/common.utils");

const hashOTP = async (otp) => {
  try {
    const hashedOTP = await hash(otp, 12);
    return hashedOTP;
  } catch (error) {
    console.error("Error hashing OTP:", error);
    throw error;
  }
};

const generateOTP = (length = 6) => {
  return generateRandomNumber(length);
};

const storeOTP = async (key, expiration = 300) => {
  try {
    const otp = generateOTP();

    const hashedOTP = await hashOTP(otp);

    await redisClient.set(key, hashedOTP, {
      EX: expiration,
    });

    return otp;
  } catch (error) {
    console.error("Error storing OTP:", error);
    throw error;
  }
};

const generateAndSendOTP = async (email) => {
  try {
    const otpStore = await storeOTP(email);

    return otpStore;
  } catch (error) {
    throw new Error(error.message);
  }
};

const verifyOTP = async (email, otp) => {
  const storedValue = await redisClient.get(email);

  if (!storedValue) {
    return { success: false, message: "OTP has expired or does not exist" };
  }

  const isMatch = await compare(otp, storedValue);

  if (!isMatch) {
    return { success: false, message: "Invalid OTP" };
  }

  await redisClient.del(email);

  return { success: true, message: "OTP verified successfully" };
};

module.exports = {
  generateOTP,
  storeOTP,
  verifyOTP,
  generateAndSendOTP,
};
