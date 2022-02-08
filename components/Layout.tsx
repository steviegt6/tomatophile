import generic from "../styles/generic.module.scss";

export default function Layout({ bgJsons, children, extra = null }: any) {
  var bg = bgJsons[Math.floor(Math.random() * bgJsons.length)];
  var bgJ = JSON.parse(bg);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgJ.src})`,
          backgroundPosition: "center, center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          width: "100%",
          height: "100%",
          left: "0",
          top: "0",
          position: "fixed",
          zIndex: -1,
        }}
        suppressHydrationWarning={true}
      />
      {extra}
      <div
        className={generic.floatingContainer}
        style={{
          backgroundColor: "rgb(0, 0, 0, 0.95)",
          borderRadius: "6px",
        }}
      >
        <h3 className={"ignore-headers"} style={{ margin: "0 0 0 0" }}>
          Artwork Info.
        </h3>
        <p style={{ margin: "0 0 0 0" }}>
          <strong>Artist:</strong> <a
            href={bgJ.pixiv}
            suppressHydrationWarning={true}
          >{bgJ.author}</a>
        </p>
      </div>
      <div
        className={generic.container}
        style={{
          backgroundColor: "rgb(0, 0, 0, 0.95)",
          borderRadius: "6px",
        }}
      >
        {children}
      </div>
    </>
  );
}
