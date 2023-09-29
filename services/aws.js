var AWS = require("aws-sdk");
var config = require("../services/config")(async function () {
  try {
    AWS.config.setPromisesDependency();
    AWS.config.update({
      accessKeyId: config.aws_access_key_id,
      secretAccessKey: config.aws_secret_access_key,
      region: "us-west-1",
    });

    const s3 = new AWS.S3();
    const response = await s3
      .listObjectsV2({
        Bucket: "hoseacodes-portfolio-s3",
      })
      .promise();
    console.log(response);
  } catch (e) {
    console.log("our error", e);
  }
})();
