/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:Do1nflqaAm5B@ep-billowing-night-a5erxrsr.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };