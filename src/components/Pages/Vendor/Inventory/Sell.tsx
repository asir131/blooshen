"use client";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import type React from "react";

const Sell: React.FC = () => {
  const [saleType, setSaleType] = useState("retail");
  const [salePrice, setSalePrice] = useState("4,990");
  const [saleDate, setSaleDate] = useState("04/30/2025");
  const [displaySoldPurchaser, setDisplaySoldPurchaser] = useState(false);
  const [displaySoldVehicle, setDisplaySoldVehicle] = useState(false);
  const [displaySoldCosts, setDisplaySoldCosts] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-10">
      <div className="grid mb-8">
        <div
          className="flex items-center gap-2 text-lg sm:text-xl md:text-[28px] font-semibold cursor-pointer"
          onClick={() => window.history.back()}
        >
          <MdOutlineKeyboardArrowLeft size={35} />
          <span className="break-words">
            2016 Nissan Altima 2.5 S 4dr Sedan
          </span>
        </div>
        
      </div>

      <div className="w-full mx-auto bg-white rounded-lg shadow-sm p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Column - Vehicle, Location, Information */}
          <div className="lg:col-span-1.2 space-y-6">
            {/* Sale Details Section */}
            <div className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 border-t border-[#9E9E9E]"></div>
                <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                  Sale Details
                </h3>
                <div className="flex-1 border-t border-[#9E9E9E]"></div>
              </div>

              <div className="space-y-6">
                {/* Sale Type Radio Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-4 mb-8">
                  <Label className="text-gray-600 md:col-span-5 md:text-right pt-1">
                    This vehicle was sold:
                  </Label>
                  <div className="md:col-span-7">
                    <RadioGroup
                      value={saleType}
                      onValueChange={setSaleType}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="retail" id="retail1" />
                        <Label
                          htmlFor="retail1"
                          className="font-normal cursor-pointer text-gray-600"
                        >
                          Sold Retail
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="retail2" id="retail2" />
                        <Label
                          htmlFor="retail2"
                          className="font-normal cursor-pointer text-gray-600"
                        >
                          Sold Retail
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className="border-t"></div>
                {/* Sale Price */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 mb-6">
                  <Label
                    htmlFor="salePrice"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Sale Price
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="salePrice"
                      type="text"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                      className="w-full md:w-2/3 border-gray-300 text-gray-500"
                    />
                  </div>
                </div>

                {/* Sale Date */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="saleDate"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Sale Date
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="saleDate"
                      type="text"
                      value={saleDate}
                      onChange={(e) => setSaleDate(e.target.value)}
                      className="w-full md:w-2/3 border-gray-300 text-gray-500"
                      placeholder="MM/DD/YYYY"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Purchaser Information */}
            <div className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 border-t border-[#9E9E9E]"></div>
                <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap">
                  Purchaser Information
                </h3>
                <div className="flex-1 border-t border-[#9E9E9E]"></div>
              </div>

              <div className="text-center text-sm text-gray-600 mb-6 px-4">
                Add purchaser info to your paperwork by adding contact details
                for a customer. Create a customer in the system by adding
                their First Name, Last Name and Email Address, or select an
                existing customer and edit their info as needed.
              </div>

              <div className="space-y-4">
                {/* First Name */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="firstName"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    First Name
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="firstName"
                      type="text"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="lastName"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Last Name
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="lastName"
                      type="text"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="emailAddress"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Email Address
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="emailAddress"
                      type="email"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="phone"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Phone
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="phone"
                      type="tel"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* Salesperson */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="salesperson"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Salesperson
                  </Label>
                  <div className="md:col-span-7">
                    <select className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md text-gray-500 bg-white">
                      <option>Unassigned</option>
                    </select>
                  </div>
                </div>

                {/* Street Address */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="streetAddress"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Street Address
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="streetAddress"
                      type="text"
                      placeholder="Street Address"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* City */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="city"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    City
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="city"
                      type="text"
                      placeholder="City"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* State */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="state"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    State
                  </Label>
                  <div className="md:col-span-7">
                    <select className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md text-gray-500 bg-white">
                      <option value="">Select State</option>
                    </select>
                  </div>
                </div>

                {/* Zip Code */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="zipCode"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Zip Code
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="zipCode"
                      type="text"
                      placeholder="Zip Code"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* Driver's License State */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="dlState"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Driver's License State
                  </Label>
                  <div className="md:col-span-7">
                    <select className="w-full md:w-2/3 px-3 py-2 border border-gray-300 rounded-md text-gray-500 bg-white">
                      <option value="">Select State</option>
                    </select>
                  </div>
                </div>

                {/* Driver's License */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label
                    htmlFor="driversLicense"
                    className="text-gray-600 md:col-span-5 md:text-right"
                  >
                    Driver's License
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="driversLicense"
                      type="text"
                      placeholder="Driver's License Number"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* Display vehicle as sold checkbox - Purchaser */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 pt-4">
                  <div className="md:col-span-5"></div>
                  <div className="md:col-span-7">
                    <RadioGroup
                      value={displaySoldPurchaser ? "sold" : ""}
                      onValueChange={(value) => setDisplaySoldPurchaser(value === "sold")}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sold" id="displaySoldPurchaser" />
                        <Label
                          htmlFor="displaySoldPurchaser"
                          className="font-normal cursor-pointer text-gray-600"
                        >
                          Display vehicle as sold on my website
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>

            {/* Vehicle Details */}
            <div className="pt-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 border-t border-[#9E9E9E]"></div>
                <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap">Vehicle Details</h3>
                <div className="flex-1 border-t border-[#9E9E9E]"></div>
              </div>

              <div className="space-y-4">
                {/* Selling Price */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label htmlFor="sellingPrice" className="text-gray-600 md:col-span-5 md:text-right">
                    Selling Price
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="sellingPrice"
                      type="text"
                      defaultValue="$ 4,990"
                      className="w-full md:w-2/3 border-gray-300 text-gray-500"
                    />
                  </div>
                </div>

                {/* Title Number */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label htmlFor="titleNumber" className="text-gray-600 md:col-span-5 md:text-right">
                    Title Number
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="titleNumber"
                      type="text"
                      placeholder="Title Number"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* Mileage */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label htmlFor="mileage" className="text-gray-600 md:col-span-5 md:text-right">
                    Mileage
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="mileage"
                      type="text"
                      defaultValue="180,004"
                      className="w-full md:w-2/3 border-gray-300 text-gray-500"
                    />
                  </div>
                </div>

                {/* Mileage Radio Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-4">
                  <Label className="text-gray-600 md:col-span-5 md:text-right pt-1">
                    Mileage
                  </Label>
                  <div className="md:col-span-7">
                    <RadioGroup defaultValue="6digits" className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="6digits" id="6digits" />
                        <Label htmlFor="6digits" className="font-normal cursor-pointer text-gray-600">
                          6 Digits
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5digits" id="5digits" />
                        <Label htmlFor="5digits" className="font-normal cursor-pointer text-gray-600">
                          5 Digits
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Date Mileage Read */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label htmlFor="dateMileageRead" className="text-gray-600 md:col-span-5 md:text-right">
                    Date Mileage Read
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="dateMileageRead"
                      type="text"
                      defaultValue="04/30/2025"
                      className="w-full md:w-2/3 border-gray-300 text-gray-500"
                    />
                  </div>
                </div>

                {/* This vehicle was sold Radio Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-start gap-4">
                  <Label className="text-gray-600 md:col-span-5 md:text-right pt-1">
                    This vehicle was sold:
                  </Label>
                  <div className="md:col-span-7">
                    <RadioGroup defaultValue="actual" className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="actual" id="actual" />
                        <Label htmlFor="actual" className="font-normal cursor-pointer text-gray-600">
                          Reflects the actual mileage
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="excess" id="excess" />
                        <Label htmlFor="excess" className="font-normal cursor-pointer text-gray-600">
                          Is in excess of its mechanical limits
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="notactual" id="notactual" />
                        <Label htmlFor="notactual" className="font-normal cursor-pointer text-gray-600">
                          Is not the actual mileage
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Affidavit */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4">
                  <Label htmlFor="affidavit" className="text-gray-600 md:col-span-5 md:text-right">
                    Affidavit (when applicable):
                  </Label>
                  <div className="md:col-span-7">
                    <Input
                      id="affidavit"
                      type="text"
                      placeholder="Affidavit"
                      className="w-full md:w-2/3 border-gray-300"
                    />
                  </div>
                </div>

                {/* Display vehicle as sold checkbox - Vehicle */}
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 pt-4">
                  <div className="md:col-span-5"></div>
                  <div className="md:col-span-7">
                    <RadioGroup
                      value={displaySoldVehicle ? "sold" : ""}
                      onValueChange={(value) => setDisplaySoldVehicle(value === "sold")}
                      className="space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sold" id="displaySoldVehicle" />
                        <Label
                          htmlFor="displaySoldVehicle"
                          className="font-normal cursor-pointer text-gray-600"
                        >
                          Display vehicle as sold on my website
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Photos */}
          <div className="lg:col-span-1 lg:px-4 xl:px-20">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3"></div>
            <div className="text-sm text-gray-500 mb-4">
              Do you need more photo to add?
            </div>
          </div>
        </div>

        {/* Costs & Discounts */}
        <div className="pt-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 border-t border-[#9E9E9E]"></div>
            <h3 className="text-lg font-semibold text-gray-900 whitespace-nowrap">Costs & Discounts</h3>
            <div className="flex-1 border-t border-[#9E9E9E]"></div>
          </div>

          {/* Table */}
          <div className="w-full  mx-auto p-4">
      <div className="bg-white rounded-lg   p-4 sm:p-6">
        {/* Mobile: Stack vertically, Desktop: Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Date Field */}
          <div className="space-y-2">
            <label 
              htmlFor="date" 
              className="block text-sm font-medium text-gray-600"
            >
              Date
            </label>
            <input
              id="date"
              type="text"
              defaultValue="04/30/2025"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Cost Type Field */}
          <div className="space-y-2">
            <label 
              htmlFor="costType" 
              className="block text-sm font-medium text-gray-600"
            >
              Cost Type
            </label>
            <input
              id="costType"
              type="text"
              placeholder="Bank Fees"
              defaultValue="Bank Fees"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Amount Field */}
          <div className="space-y-2">
            <label 
              htmlFor="amount" 
              className="block text-sm font-medium text-gray-600"
            >
              Amount
            </label>
            <input
              id="amount"
              type="text"
              defaultValue="$ 4,990"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>

          {/* Note Field */}
          <div className="space-y-2">
            <label 
              htmlFor="note" 
              className="block text-sm font-medium text-gray-600"
            >
              Note
            </label>
            <input
              id="note"
              type="text"
              placeholder="Add a note..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {/* Optional: Action buttons */}
       
      </div>
    </div>

          {/* Total */}
          <div className="bg-[#F5F5F5] border mx-2 sm:mx-9 border-[#E8E8E8] p-3 rounded mb-6 text-center">
            <span className="text-gray-600 font-medium">Total $4,990.00</span>
          </div>

          {/* Add Cost/Discount Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6">
            <button className="flex items-center justify-center gap-2 py-2 border rounded-lg px-5 text-gray-600 hover:text-gray-800">
              <span className="text-2xl flex items-center font-bold">+</span>
              <span className="flex items-center">Add Cost</span>
            </button>
            <button className="flex items-center justify-center gap-2 px-5 py-2 border rounded-lg text-gray-600 hover:text-gray-800">
              <span className="text-2xl font-bold">−</span>
              <span>Add Discount</span>
            </button>
          </div>

          {/* Display vehicle as sold checkbox - Costs */}
          <div className="flex justify-center mb-6">
            <RadioGroup
              value={displaySoldCosts ? "sold" : ""}
              onValueChange={(value) => setDisplaySoldCosts(value === "sold")}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sold" id="displaySoldCosts" />
                <Label
                  htmlFor="displaySoldCosts"
                  className="font-normal cursor-pointer text-gray-600"
                >
                  Display vehicle as sold on my website
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Remove Only Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
            <span className="text-gray-600 font-medium whitespace-nowrap border rounded-lg px-5 py-3">Remove Only</span>
            <span className="text-gray-600 flex items-center">I want to remove this vehicle permanently from the system.</span>
          </div>

          {/* Verify Details Button */}
          <div className="flex justify-center sm:justify-end">
            <Button 
              className="w-full sm:w-auto px-8 py-3 text-black font-medium rounded-md hover:opacity-90"
              style={{ backgroundColor: '#FFE135' }}
            >
              Verify Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;