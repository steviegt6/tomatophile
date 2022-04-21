import GenericFooter from "./footer/GenericFooter";
import GenericHeader from "./header/GenericHeader";

/**
 * Streamlined layout shared by all webpages, providing default stylization, headers, footers, etc.
 * @param param0 Parameters for the generic layout.
 */
export default function GenericLayout({
  children,
  // path,
  // title,
  home = false,
}: any) {
  return (
    <div>
      {/* Background */}
      <div className="background" />
      <div className="background-cover" />

      {/* Header */}
      <GenericHeader home={home} /*path={path} title={title}*/ />

      {/* Body Content */}
      <div>{children}</div>

      <GenericFooter />
    </div>
  );
}
