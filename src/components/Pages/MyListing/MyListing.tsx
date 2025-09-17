"use client";
import React, { useState } from "react";
import Listing from "@/assets/car/listingCar.jpg";
import Image from "next/image";

const MyListings = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [showBids, setShowBids] = useState(true);
  const [showModal, setShowModal] = useState(false);  
  const [showSuccessModal, setShowSuccessModal] = useState(false); // State for success modal
  const [showRemoveModal, setShowRemoveModal] = useState(false); // State for removal modal

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    setShowBids(false);
  };

  const toggleBids = () => {
    setShowBids(!showBids);
    setShowDetails(false);
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSaveChanges = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
    setShowSuccessModal(true);
  };

  const openRemoveModal = () => setShowRemoveModal(true);
  const closeRemoveModal = () => setShowRemoveModal(false);

  const handleRemoveVehicle = () => {
    // Simulate vehicle removal logic here (e.g., API call)
    closeRemoveModal();
    // Optionally reset states or update UI after removal
  };

  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="md:flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">My Listings</h2>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-300">
            + Add Vehicle
          </button>
        </div>

        {/* Listings Section */}
        <div className="flex mt-2 items-center space-x-3">
          <button className="bg-gray-900 text-white py-1 rounded-full text-sm px-3">
            2019 Acura LX Premium
          </button>
          <p className="text-sm text-gray-500 mt-1">2020 Honda Civic LX</p>
        </div>

        <div className="md:grid grid-cols-2 gap-6">
          {/* Listing Card */}
          <div className="rounded-lg pt-5">
            <Image
              src={Listing}
              alt="Car"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Details Card */}
          <div className="max-w-md h-[350px] mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Complete your car details
              </h2>
              <p className="text-gray-600 mt-1">
                Your car&apos;s profile is 60% complete.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "60%" }}
                />
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600">You&apos;ve uploaded only one photo.</p>
              <p className="text-gray-600">
                Add 3 or more photos to increase your chances of getting bids
              </p>
              <button className="mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition">
                <span className="mr-2">📷</span> Add more photos
              </button>
            </div>

            <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-gray-700">
              <div className="flex justify-between items-center">
                <span>Listing Status</span>
                <span className="flex items-center">
                  <span className="mr-2">0d 9h 59m 1s</span>
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 flex space-x-4 border-b">
          <a
            href="#"
            className={`${showBids ? "text-yellow-500 font-semibold" : "text-gray-600"} hover:underline`}
            onClick={(e) => {
              e.preventDefault();
              toggleBids();
            }}
          >
            Bids by dealerships
          </a>
          <a
            href="#"
            className={`${showDetails ? "text-yellow-500 font-semibold" : "text-gray-600"} hover:underline`}
            onClick={(e) => {
              e.preventDefault();
              toggleDetails();
            }}
          >
            Details
          </a>
        </div>

        {/* Additional Table/Details Section */}
        {showDetails && (
          <div className="mt-6 bg-white p-6 rounded-lg shadow-md max-w-3xl">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              2020 Honda Civic LX
            </h3>
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border text-left">Attribute</th>
                  <th className="px-4 py-2 border text-left">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">VIN</td>
                  <td className="px-4 py-2 border">5TELU24N87Z238956</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Mileage</td>
                  <td className="px-4 py-2 border">54,456</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Asking Price</td>
                  <td className="px-4 py-2 border">---</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">Seller Notes</td>
                  <td className="px-4 py-2 border">---</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-300 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-800">
                  Listing Status
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">! Not on Auction</span>
                  <span className="text-sm text-gray-600">! Not on Auction</span>
                  <span className="text-sm text-gray-600">! Not on Auction</span>
                  <span className="text-sm text-gray-600">! Not on Auction</span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <button className="text-sm text-blue-500" onClick={openModal}>
                Edit Details
              </button>
              <button className="text-sm text-red-500 ml-4" onClick={openRemoveModal}>
                Remove car from account
              </button>
            </div>
          </div>
        )}

        {/* Bids Section */}
        {showBids && (
          <div className="mt-6 text-center pb-10">
            <div className="inline-block bg-yellow-100 p-4 rounded-full">
              <svg
                className="w-8 h-8 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 102 0V6zm-1 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-600 mt-2">No Bids from dealers yet</p>
            <p className="text-sm text-gray-500">
              Dealers haven&apos;t placed any bids on your car yet. Check back
              later or explore ways to attract more offers!
            </p>
            <button className="mt-2 border text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
              Get Tips &amp; Tricks
            </button>
          </div>
        )}

        {/* Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Vehicle Details</h3>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleSaveChanges}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Mileage
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    defaultValue="12,500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    What is the condition of the vehicle?
                  </label>
                  <div className="mt-2 space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="condition"
                        className="mr-2"
                        defaultChecked
                      />
                      <span>Excellent (e.g., no scratches or dents, runs perfectly, and has a clean history (e.g., no accidents))</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="condition" className="mr-2" />
                      <span>Good (e.g., minor cosmetic wear (e.g., light scratches, rust, nicks) and no major mechanical issues)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="condition" className="mr-2" />
                      <span>Fair (e.g., some visible damage (e.g., dents or fading paint) or minor mechanical issues that don’t affect drivability)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="condition" className="mr-2" />
                      <span>Poor (e.g., significant cosmetic damage (e.g., rust, large dents) or major mechanical problems (e.g., engine issues))</span>
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Description for potential buyers
                  </label>
                  <textarea
                    className="mt-1 block w-full border rounded-md shadow-sm"
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full text-center">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-12 h-12 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 14a1 1 0 100 2 1 1 0 000-2zm-5-7a1 1 0 011-1h1a1 1 0 110 2H6a1 1 0 01-1-1zm9 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm-5-7a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zm0 12a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM6 8a1 1 0 011-1h1a1 1 0 110 2H6a1 1 0 01-1-1zm9 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Vehicle relisted successfully!
              </h3>
              <p className="text-gray-600 mt-2">
                Your car has been successfully relisted for auction.
              </p>
              <p className="text-gray-600">Keep an eye out for new bids!</p>
              <button
                className="mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200"
                onClick={() => setShowSuccessModal(false)}
              >
                Okey
              </button>
            </div>
          </div>
        )}

        {/* Remove Modal */}
        {showRemoveModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md w-full border border-yellow-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Remove car from account</h3>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={closeRemoveModal}
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-4">
                Remove this vehicle <strong>2019 Acura LX Premium</strong> from
                your Listings?
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-full"
                  onClick={closeRemoveModal}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  onClick={handleRemoveVehicle}
                >
                  Yes, remove vehicle
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListings;