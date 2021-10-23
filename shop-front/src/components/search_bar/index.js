import SearchIcon from "@material-ui/icons/Search";
import { styled } from "@mui/material/styles";

const inputStyle = {
  width: "100%",
  height: 30,
  border: "0 none",
  outline: 0,
  backgroundColor: "#F2F2F2",
};

const searhBarStyle = {
  padding: 5,
  marginTop: 20,
  display: "flex",
  backgroundColor: "#F2F2F2",
  height: 30,
  borderRadius: 5,
  width: "25%",
};

const SearchIconWrapper = styled("div")(() => ({
  height: "100%",
  position: "relative",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

function SearchBar(props) {
  return (
    <div style={searhBarStyle}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <input
        style={inputStyle}
        placeholder="Search..."
        type="text"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default SearchBar;
