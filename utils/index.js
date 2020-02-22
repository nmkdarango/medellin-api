module.exports = {
  getRequestDate: (req, res, next) => {
    const date = new Date();

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours();

    const year = date.getFullYear();
    const month = date.getMonth(); // beware: January = 0; February = 1, etc.
    const day = date.getDate();

    const dateString = `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;

    console.log(`Fecha de petición: ${dateString}`);
    next();
  },
}