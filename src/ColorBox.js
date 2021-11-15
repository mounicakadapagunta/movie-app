export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    height: "25px",
    width: "50%",
    marginTop: "10px",
    alignItems: "center"
  };
  return <div style={styles}></div>;
}
