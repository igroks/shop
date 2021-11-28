import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useHistory, useParams } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function ProductsEdit() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3020/products/${id}`, { credentials: "include" })
      .then((resp) => resp.json())
      .then((json) => {
        setName(json.name);
        setDescription(json.description);
        setInventory(json.inventory);
        setPrice(json.price);
      });
  }, [id]);

  const handleSubmit = (e) => {
    const product = { name, description, price, inventory };
    console.log(product);
    setIsPending(true);

    e.preventDefault();
    fetch(`http://localhost:3020/products/${id}`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((resp) => resp.json())
      .then((json) => {
        setIsPending(false);
        if (json.errors) {
          json.errors.forEach((error) => {
            if (error.path === "name") setNameError(error.message);
          });
        } else {
          history.push(`/products/${id}`);
        }
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          backgroundColor: "white",
          margin: "20px",
          width: "50%",
          padding: "30px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            sx={{ fontSize: 32, fontWeight: "bold" }}
            color="black"
            gutterBottom
          >
            Novo Produto
          </Typography>
        </div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1 },
          }}
        >
          <TextField
            error={nameError !== ""}
            style={{ width: "60%" }}
            id="name"
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError("");
            }}
            helperText={nameError}
          />
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <TextField
              id="inventory"
              label="Estoque"
              type="number"
              value={inventory}
              onChange={(e) => setInventory(e.target.value)}
            />
            <FormControl>
              <InputLabel htmlFor="price">Preço</InputLabel>
              <OutlinedInput
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                label="Preço"
              />
            </FormControl>
          </div>
          <TextField
            style={{ width: "90%" }}
            id="description"
            label="Descrição"
            multiline
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            {isPending ? (
              <Button disabled onClick={handleSubmit}>
                Enviando...
              </Button>
            ) : (
              <Button onClick={handleSubmit}>Adicionar</Button>
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}

export default ProductsEdit;
