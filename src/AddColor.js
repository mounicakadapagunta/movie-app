import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ColorBox } from "./ColorBox";

function AddColor() {
  const [color, setColor] = useState("red");
  const styles = { backgroundColor: color };

  const [colors, setColors] = useState(["teal", "orange", "lavender"]);
  return (
    <div>
      <div className="add-color-form">
        <TextField value={color}
          onChange={(event) => setColor(event.target.value)}
          style={styles} label="Enter a Color" variant="standard" />
        {/* copy color list and then add the new color */}
        <Button variant="outlined" onClick={() => setColors([...colors, color])}> {" "}
          Add Color</Button>
      </div>
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
