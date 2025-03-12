import { Request, Response } from "express";
import User from "../models/user.model";

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.status(201).json(newUser);
};
