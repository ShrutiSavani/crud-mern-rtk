import axios from "axios";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userSlice";

import { useNavigate, useParams } from "react-router-dom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";

const UpdateUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.users);
  const user = users.find((u) => u.id === id);

  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [age, setAge] = useState(user.age);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:8000/users/${id}`, {
        name,
        email,
        age,
      });
      dispatch(updateUser({ id, name, email, age }));
    } catch (error) {
      console.log(error);
    }

    navigate("/");
  };

  return (
    <Flex justifyContent="center">
      <Flex direction="column" minW="400px" gap="16px">
        <Text
          alignSelf="center"
          fontSize="24px"
          fontWeight="600"
          color="blue.700"
        >
          Update User
        </Text>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Name :
          </Text>
          <Input
            flex="3"
            size="sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Flex>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Email :
          </Text>
          <Input
            flex="3"
            size="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Age :
          </Text>
          <Input
            flex="3"
            size="sm"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Flex>
        <Button onClick={() => handleSubmit()} color="white" bg="blue.600">
          Update
        </Button>
      </Flex>
    </Flex>
  );
};

export default UpdateUser;
