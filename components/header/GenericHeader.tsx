import ProfileReturnComponent from "./ProfileReturnComponent";

export default function GenericHeader({ home /*path, title*/ }: any) {
  // if (home) return <></>;

  return (
    <>
      <div className={"header"}>
        <ProfileReturnComponent home={home} /*path={path} title={title}*/ />
      </div>
    </>
  );
}
