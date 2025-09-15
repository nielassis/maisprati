import React, { useState } from "react";
import styled from "styled-components";

const CheckoutContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  font-family: "Poppins", sans-serif;

  @media (max-width: 576px) {
    padding: 20px;
    margin: 20px;
  }
`;

const Title = styled.h2`
  color: #222;
  margin-bottom: 25px;
  text-align: center;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;

  &:focus {
    border-color: #4b3ec4;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.95rem;

  &:focus {
    border-color: #4b3ec4;
    outline: none;
  }
`;

const CheckoutButton = styled.button`
  grid-column: span 2;
  padding: 12px 0;
  margin-top: 20px;
  background-color: #4b3ec4;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #3a2bb8;
  }

  @media (max-width: 576px) {
    grid-column: span 1;
  }
`;

export default function Checkout() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "creditCard",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Checkout data:", formData);
    alert("Compra finalizada com sucesso!");
  };

  return (
    <CheckoutContainer>
      <Title>Checkout</Title>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="fullName">Nome Completo</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="address">Endereço</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="city">Cidade</Label>
          <Input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="zip">CEP</Label>
          <Input
            type="text"
            id="zip"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="paymentMethod">Método de Pagamento</Label>
          <Select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="creditCard">Cartão de Crédito</option>
            <option value="pix">PIX</option>
            <option value="boleto">Boleto</option>
          </Select>
        </InputGroup>

        <CheckoutButton type="submit">Finalizar Compra</CheckoutButton>
      </Form>
    </CheckoutContainer>
  );
}
