module.exports = (appName, port, error) => {
  if (error) {
    return console.log(
      `Error happened while starting the ${appName} app on port ${port}: `,
      error
    );
  }
  console.log(`${appName} service successfully started on port ${port}`);
}