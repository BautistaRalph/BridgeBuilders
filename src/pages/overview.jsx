import React, { useState } from 'react';
import StatisticCard from '@/components/custom/StatisticCard';
import { Input } from "@/components/ui/input";
import { ToggleButton } from "@/components/custom/ToggleButton";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { MdEditNote, MdDeleteForever } from "react-icons/md";
import search from '@/assets/search.png'; 
import filter from '@/assets/filter.png'; 
import UserCard from '@/components/custom/UserCard'; 
import { Modal } from '@/components/custom/Modal';
import { AddYearModal } from '@/components/custom/AddYearModal';

const Overview = () => {
  const [clientsServedToday] = useState(11);
  const [totalClientsServed] = useState(157);
  const [totalRetained] = useState(52);
  const [activeCategory, setActiveCategory] = useState('Home Care');
  const [activeYear, setActiveYear] = useState('All');
  const [editMode, setEditMode] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [yearToDelete, setYearToDelete] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newYear, setNewYear] = useState('');
  const [years, setYears] = useState(['All', '2018', '2019', '2020', '2021', '2022', '2023', '2024']);

  const clients = [
    { name: 'John Doe', ageRange: '10-17', gender: 'Male', year: '2018', category: 'Home Care', profileLink: '/profile/1' },
    { name: 'Jane Smith', ageRange: '18-24', gender: 'Female', year: '2019', category: 'Community', profileLink: '/profile/2' },
    { name: 'Alice Johnson', ageRange: '25-34', gender: 'Female', year: '2020', category: 'Home Care', profileLink: '/profile/3' }
  ];

  const handleCategoryToggle = (category) => {
    setActiveCategory(category);
  };

  const handleYearToggle = (year) => {
    setActiveYear(year);
  };

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleDeleteYear = (year) => {
    setYearToDelete(year);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteYear = () => {
    setYears(years.filter(year => year !== yearToDelete));
    setIsDeleteModalOpen(false);
  };

  const handleAddClick = () => {
    setIsAddModalOpen(true);
  };

  const confirmAddYear = () => {
    if (newYear && !years.includes(newYear)) {
      setYears([...years, newYear]);
    }
    setIsAddModalOpen(false);
    setNewYear('');
  };

  return (
    <>
      {/* Navbar Placeholder */}
      <div className="bg-pink-200 h-16 mb-4 flex items-center justify-center">
        <span className="text-xl text-gray-600">Navbar Placeholder</span>
      </div>

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg w-full">
        {/* Tabs */}
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
          <Popover>
            <PopoverTrigger as="div" className="relative">
              <Button className="bg-purple-600 text-white">
                <MdEditNote className="h-6 w-6" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4 bg-white shadow-md rounded">
              <div className="flex items-center space-x-4">
                <Button className="bg-pink-300 text-white" onClick={handleEditClick}>
                  <p className="text-white font-bold">Edit</p>
                </Button>
                <Button className="bg-pink-300 text-white" onClick={handleAddClick}>
                  <p className="text-white font-bold">Add</p>
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Year Filters */}
        <div className="mb-2 text-lg font-bold text-purple-600">Years:</div>
        <div className="flex flex-wrap mb-4">
          {years.map((year) => (
            <div key={year} className="relative mr-4 mb-2">
              <ToggleButton
                category={year}
                isActive={year === activeYear}
                onClick={() => handleYearToggle(year)}
              />
              {editMode && (
                <button 
                  className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 text-red-500 p-2"
                  onClick={() => handleDeleteYear(year)}
                  style={{ background: 'transparent' }}
                >
                  <MdDeleteForever style={{ color: 'red', fontSize: '24px' }} />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4 mb-4">
        <StatisticCard label="Clients served today" value={clientsServedToday} />
        <StatisticCard label="Total clients served" value={totalClientsServed} />
        <StatisticCard label="Total retained" value={totalRetained} />
      </div>

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
              <Button className="bg-purple-600 text-white pl-10" size="lg">
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
              {clients.map((client, index) => (
                <UserCard
                  key={index}
                  name={client.name}
                  ageRange={client.ageRange}
                  gender={client.gender}
                  year={client.year}
                  category={client.category}
                  profileLink={client.profileLink}
                  avatar={client.avatar} 
                />
              ))}
            </div>
          </div>
    
          {/* Delete Confirmation Modal */}
          <Modal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={confirmDeleteYear}
            message={`Are you sure you want to delete the year ${yearToDelete}?`}
          />
    
          {/* Add Year Modal */}
          <AddYearModal
            isOpen={isAddModalOpen}
            onClose={() => setIsAddModalOpen(false)}
            onConfirm={confirmAddYear}
            message="Please enter the year to add:"
          />
        </>
      );
    };
    
    export default Overview;
    
