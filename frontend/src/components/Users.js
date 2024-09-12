import React from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/userSlice";

import { Link } from "react-router-dom";
import {
  Button,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  Code,
} from "@chakra-ui/react";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/${id}`);
      dispatch(deleteUser({ id }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex justifyContent="center">
      <Flex direction="column" gap="16px">
        <Text
          alignSelf="center"
          fontSize="24px"
          fontWeight="600"
          color="blue.700"
        >
          User Details
        </Text>
        <Flex gap="12px" alignSelf="center">
          <Code>MERN</Code>
          <Code>+</Code>
          <Code>Redux toolkit</Code>
        </Flex>
        <Link to="/create">
          <Button
            p="4px 8px"
            h="auto"
            fontSize="14px"
            color="white"
            bg="blue.600"
            alignSelf="start"
          >
            Add User
          </Button>
        </Link>
        <TableContainer>
          <Table>
            <Thead>
              <Tr>
                <Th>Sr</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Age</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user, i) => {
                return (
                  <Tr key={i}>
                    <Td>{i + 1}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.age}</Td>
                    <Td>
                      <Flex gap="12px">
                        <Link to={`/edit/${user.id}`}>
                          <Button
                            p="4px 8px"
                            h="auto"
                            fontSize="14px"
                            color="white"
                            bg="blue.600"
                          >
                            Edit
                          </Button>
                        </Link>
                        <Button
                          p="4px 8px"
                          h="auto"
                          fontSize="14px"
                          color="white"
                          bg="red.600"
                          onClick={() => handleDelete(user.id)}
                        >
                          Delete
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};

export default Users;
