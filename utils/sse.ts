import EventSource from "react-native-sse";

interface SSEClientOptions {
  url: string;
  onOpen?: () => void;
  onMessage?: (data: any) => void;
  onError?: (error: string) => void;
  onClose?: () => void;
}

class SSEClient {
  private eventSource: EventSource;
  private url: string;

  constructor(options: SSEClientOptions) {
    this.url = options.url;
    this.eventSource = new EventSource(this.url);

    this.eventSource.addEventListener("open", () => {
      console.log("Open SSE connection.");
      options.onOpen && options.onOpen();
    });

    this.eventSource.addEventListener("message", (event) => {
      console.log("New message event:", event.data);
      options.onMessage && options.onMessage(event.data);
    });

    this.eventSource.addEventListener("error", (event) => {
      if (event.type === "error") {
        console.error("Connection error:", event.message);
        options.onError && options.onError(event.message);
      } else if (event.type === "exception") {
        console.error("Error:", event.message, event.error);
        options.onError && options.onError(event.message);
      }
    });

    this.eventSource.addEventListener("close", () => {
      console.log("Close SSE connection.");
      options.onClose && options.onClose();
    });
  }

  // 关闭连接
  close(): void {
    this.eventSource.close();
    this.eventSource.removeAllEventListeners();
    console.log("SSE connection closed.");
  }
}

export default SSEClient;
