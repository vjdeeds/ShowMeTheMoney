import request from "supertest";
import { app, server } from "./index";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterAll((done) => {
  server.close(done);
});

describe("Balance Sheet API", () => {
  test("should return balance sheet data successfully", async () => {
    // Mock API response
    const mockData = {
      Reports: [{ ReportID: "BalanceSheet", ReportName: "Balance Sheet" }],
    };
    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const response = await request(app).get("/api/balance-sheet");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockData);
  });

  test("should return 500 on API failure", async () => {
    console.error = jest.fn(); // Suppress console errors
    mockedAxios.get.mockRejectedValueOnce(new Error("API Error"));

    const response = await request(app).get("/api/balance-sheet");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "Error fetching balance sheet data",
    });
    expect(console.error).toHaveBeenCalledWith(
      "Error fetching balance sheet data:",
      expect.any(Error)
    );
  });
});
