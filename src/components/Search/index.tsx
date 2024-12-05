import { TextField } from "@mui/material";

interface SearchProps {
  filterString: string;
  setFilterString: any;
  placeholder: string;
}
export function Search({
  filterString,
  setFilterString,
  placeholder,
}: SearchProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        placeholder={placeholder}
        value={filterString}
        sx={{ width: "80%", margin: "10px" }}
        onChange={(e) => setFilterString(e.target.value)}
      ></TextField>
    </div>
  );
}
