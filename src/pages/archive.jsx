import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { ToggleButton } from "@/components/custom/ToggleButton";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import search from '@/assets/search.png';
import filter from '@/assets/filter.png';
import UserCard from '@/components/custom/UserCard';
import Appbar from '@/components/ui/Appbar';
import { Users } from '@/lib/placeholder/users';

const Archive = () => {
  const [activeCategory, setActiveCategory] = useState('Home Care');
  const [activeYear, setActiveYear] = useState('All');
  const [years] = useState(['All', '2018', '2019', '2020', '2021', '2022', '2023', '2024']);

  const deletedUsers = Users.filter(user => user.status === "Deleted");

  const handleCategoryToggle = (category) => {
    setActiveCategory(category);
  };

  const handleYearToggle = (year) => {
    setActiveYear(year);
  };

  return (
    <>
      <Appbar />

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg w-full"><h1 class="header">Archive</h1>
        <hr className="my-4 border-t-2 border-bb-violet" />
        {/* Tabs */}
        <div className="mb-2 text-lg font-bold text-bb-violet">Categoy:</div>
        <div className="flex space-x-4 mb-4">
          <ToggleButton
            category="Home Care"
            isActive={activeCategory === 'Home Care'}
            onClick={() => handleCategoryToggle('Home Care')}
          >
            Home Care
          </ToggleButton>
          <ToggleButton
            category="Community"
            isActive={activeCategory === 'Community'}
            onClick={() => handleCategoryToggle('Community')}
          >
            Community
          </ToggleButton>
        </div>

        {/* Year Filters */}
        <div className="mb-2 text-lg font-bold text-bb-violet">Years:</div>
        <div className="flex flex-wrap mb-4">
          {years.map((year) => (
            <div key={year} className="relative mr-4 mb-2">
              <ToggleButton
                category={year}
                isActive={year === activeYear}
                onClick={() => handleYearToggle(year)}
              />
            </div>
          ))}
        </div>

        <hr className="my-4 border-t-2 border-bb-violet" />

        {/* Search and Filter */}
        <div className="flex space-x-4 mb-4 w-1/5 items-center">
          {/* Search Input */}
          <div className="relative flex items-center w-full">
            <Input
              type="text"
              placeholder="Search clients"
              className="w-full pl-10"
            />
            <img
              src={search}
              alt="Search Icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
            />
          </div>
          {/* Filter Popover */}
          <Popover>
            <PopoverTrigger as="div" className="relative flex items-center">
              <Button className="bg-bb-violet text-white pl-10" size="lg">
                Filter
              </Button>
              <img
                src={filter}
                alt="Filter Icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
              />
            </PopoverTrigger>
            <PopoverContent className="p-4 bg-white shadow-md rounded max-w-md border border-pink-300 border-2">
              <div className="flex flex-col space-y-4">
                {/* Age Range Filter */}
                <div className="flex flex-col">
                  <label htmlFor="ageRangeFilter" className="text-sm text-black">Age Range:</label>
                  <select id="ageRangeFilter" className="mt-1 p-2 border border-gray-300 rounded text-black">
                    <option value="5-10">5-10</option>
                    <option value="10-17">10-17</option>
                  </select>
                </div>
                {/* Gender Filter */}
                <div className="flex flex-col">
                  <label htmlFor="genderFilter" className="text-sm text-black">Gender:</label>
                  <select id="genderFilter" className="mt-1 p-2 border border-gray-300 rounded text-black">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                {/* Category Filter */}
                <div className="flex flex-col">
                  <label htmlFor="categoryFilter" className="text-sm text-black">Category:</label>
                  <select id="categoryFilter" className="mt-1 p-2 border border-gray-300 rounded text-black">
                    <option value="Home Care">Home Care</option>
                    <option value="Community">Community</option>
                  </select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Client List */}
        <div className="space-y-4">
          {deletedUsers.map((user, index) => (
            <UserCard
              key={index}
              name={user.pangalan}
              ageRange={user.edad}
              gender={user.kasarian}
              year={user.taon}
              category={user.status}
              profileLink={`/profile`}
              avatar={user.picture}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Archive;
