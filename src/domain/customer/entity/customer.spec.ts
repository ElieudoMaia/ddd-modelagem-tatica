import { Address } from "../value-object/address";
import { Customer } from "./customer";

describe("Customer unit tests", () => {
  it("should throw an error when id is empty", () => {
    expect(() => {
      const customer = new Customer("", "Elieudo");
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      const customer = new Customer("123", "");
    }).toThrowError("Name is required");
  });

  it("should throw error when name and id are empty", () => {
    expect(() => {
      const customer = new Customer("", "");
    }).toThrowError("Customer: Id is required, Customer: Name is required");
  });

  it("should change name", () => {
    const customer = new Customer("123", "Elieudo");
    customer.changeName("Maia");
    expect(customer.name).toBe("Maia");
  });

  it("should activate customer", () => {
    const customer = new Customer("1", "Customer 1");
    const address = new Address("Street 1", 123, "13330-250", "São Paulo");
    customer.changeAddress(address);
    customer.activate();
    expect(customer.isActive).toBe(true);
  });

  it("should throw error when address is undefined when you activate a customer", () => {
    expect(() => {
      const customer = new Customer("1", "Customer 1");
      customer.activate();
    }).toThrowError("Address is required to activate the customer");
  });

  it("should deactivate customer", () => {
    const customer = new Customer("1", "Customer 1");
    customer.deactivate();
    expect(customer.isActive).toBe(false);
  });

  it("should add reward points", () => {
    const customer = new Customer("1", "Customer 1");
    expect(customer.rewardPoints).toBe(0);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(10);

    customer.addRewardPoints(10);
    expect(customer.rewardPoints).toBe(20);
  });
});
