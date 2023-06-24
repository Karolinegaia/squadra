class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(messagem: string, statusCode = 400) {
    this.message = messagem;
    this.statusCode = statusCode;
  }
}

export default AppError;
