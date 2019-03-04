import Vod from "../models/Vod";
import VideoRespuesta from "../models/VideoRespuesta";

const myVod = new Vod([
  new VideoRespuesta("¿Consideras tener una amplia experiencia en el tema de diseño de productos digitales?"),
  new VideoRespuesta("¿En donde te ves en 5 años?"),
  new VideoRespuesta("¿Cuales son tus metas?"),
  new VideoRespuesta("¿Cuales son las primeras diferencias que encuentras entre UX y UI? 2"),
  new VideoRespuesta("¿Cuales son las primeras diferencias que encuentras entre UX y UI?")
]);

export default myVod;