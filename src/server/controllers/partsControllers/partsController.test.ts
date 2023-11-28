import { type Request, type Response } from "express";
import { Part } from "../../../database/models/Parts.js";
import { mockPartsList } from "./mockData.js";
import { getParts } from "./partsControllers.js";
import { CustomError } from "../../../CustomError/CustomError.js";

beforeEach(() => jest.restoreAllMocks());

describe("Given getParts controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its status method with 200", async () => {
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue(mockPartsList),
      };
      const req: Partial<Request> = {};
      const next = jest.fn();
      const expectedStatusCode = 200;

      Part.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue(mockPartsList),
      }));

      await getParts(req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method", async () => {
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue(mockPartsList),
      };
      const req: Partial<Request> = {};
      const next = jest.fn();

      Part.find = jest.fn().mockImplementationOnce(() => ({
        exec: jest.fn().mockReturnValue(mockPartsList),
      }));

      await getParts(req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith({ parts: mockPartsList });
    });
  });

  describe("When it receives a bad request", () => {
    test("Then it should call its next function", async () => {
      const res: Partial<Response> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockResolvedValue({}),
      };
      const req: Partial<Request> = {};
      const next = jest.fn();

      const expectedError = new CustomError(
        "Bad request",
        400,
        "Couldn't retrieve parts list",
      );

      req.body = {};

      Part.find = jest.fn().mockReturnValue(undefined);

      await getParts(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});
