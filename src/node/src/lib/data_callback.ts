export const onDataCallback = (data: { chunk: string }) => (chunk: any) =>
  (data.chunk += chunk);