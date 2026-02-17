export default function WithBadge() {
  return (
    <div
      style={{
        position: "relative",
        width: "clamp(100px, 25vw, 200px)",
        aspectRatio: "1 / 1",
        transform: "rotate(-14deg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22c%22 x1=%220%25%22 y1=%220%25%22 x2=%220%25%22 y2=%22100%25%22%3E%3Cstop offset=%220%25%22 stop-color=%22%23bada55%22/%3E%3Cstop offset=%22100%25%22 stop-color=%22%234b6a1d%22/%3E%3C/linearGradient%3E%3CclipPath id=%22b%22%3E%3Cpath fill=%22currentColor%22 d=%22M761 588q-51 88-137.5 106t-169 23q-82.5 5-228-30t-125-180Q122 362 193 226.5t213-67Q548 228 691 224t132 136q-11 140-62 228Z%22%2F%3E%3C%2FclipPath%3E%3Cfilter id=%22a%22 x=%22-50vw%22 y=%22-50vh%22 width=%22100vw%22 height=%22100vh%22%3E%3CfeFlood flood-color=%22%23fff%22 result=%22neutral-gray%22%2F%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%222.5%22 numOctaves=%22100%22 stitchTiles=%22stitch%22 result=%22noise%22%2F%3E%3CfeColorMatrix in=%22noise%22 type=%22saturate%22 values=%220%22 result=%22destaturatedNoise%22%2F%3E%3CfeComponentTransfer in=%22desaturatedNoise%22 result=%22theNoise%22%3E%3CfeFuncA type=%22table%22 tableValues=%220 0 0.15 0%22%2F%3E%3C%2FfeComponentTransfer%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22theNoise%22 mode=%22soft-light%22 result=%22noisy-image%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3Cg filter=%22url(%23a)%22 clip-path=%22url(%23b)%22%3E%3Cpath fill=%22url(%23c)%22 d=%22M761 588q-51 88-137.5 106t-169 23q-82.5 5-228-30t-125-180Q122 362 193 226.5t213-67Q548 228 691 224t132 136q-11 140-62 228Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
        
}}
    >
  <h1
    style={{
      position: "absolute",
      top: "45%",
      left: "48%",
      transform: "translate(-50%, -50%) rotate(14deg)",
      fontWeight: 900,
      fontSize: "clamp(20px, 6vw, 50px)",
      letterSpacing: "0.08em",
        background: "linear-gradient(180deg, #ffffff 0%, #8f8f9f 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
      
    }}
  >
    WITH
  </h1>
    </div >
  );
}
