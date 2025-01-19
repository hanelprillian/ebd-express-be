
export type Response<TData> = {
  data: TData;
  status: string;
  code: number;
}

export class ResponseAdapter {
  static success<TData>(data: TData): Response<TData> {
    return {
      data,
      status: "success",
      code: 200,
    };
  }

  static error<TData>(data: TData): Response<TData> {
    return {
      data,
      status: "error",
      code: 500,
    };
  }

  static notFound<TData>(data: TData): Response<TData> {
    return {
      data,
      status: "not_found",
      code: 404,
    };
  }
}
