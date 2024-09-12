import axios from "axios";
import React, { useState } from "react";

import { addUser } from "../redux/userSlice";

import { Button, Flex, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:8000/users/", {
        name,
        email,
        age,
      });
      dispatch(addUser(res.data));
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
          Create New User
        </Text>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Name :
          </Text>
          <Input flex="3" size="sm" onChange={(e) => setName(e.target.value)} />
        </Flex>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Email :
          </Text>
          <Input
            flex="3"
            size="sm"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Flex>
        <Flex alignItems="center">
          <Text flex="1" bg="palegoldenrod" lineHeight="0">
            Age :
          </Text>
          <Input flex="3" size="sm" onChange={(e) => setAge(e.target.value)} />
        </Flex>
        <Button onClick={() => handleSubmit()} color="white" bg="blue.600">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateUser;
