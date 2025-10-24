/**
 * Safe area wrapper that mirrors React Native's SafeAreaView behaviour
 * by honouring notch/punch-hole insets via CSS env variables.
 */
export default function SafeAreaView({
  as: asProp,
  children,
  className = "",
  style,
  ...rest
}) {
  const Component = asProp ?? "div";
  const safeAreaStyle = {
    paddingTop: "env(safe-area-inset-top, 0)",
    paddingRight: "env(safe-area-inset-right, 0)",
    paddingBottom: "env(safe-area-inset-bottom, 0)",
    paddingLeft: "env(safe-area-inset-left, 0)",
    ...style,
  };

  return (
    <Component className={className} style={safeAreaStyle} {...rest}>
      {children}
    </Component>
  );
}
