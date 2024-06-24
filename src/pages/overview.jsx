import React, { useState, useEffect } from 'react';
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
import Appbar from '@/components/ui/Appbar';
import { Users } from '@/lib/placeholder/users';
import { statisticsData } from '@/lib/placeholder/statistics';
import welcome from '@/assets/welcome.mp3'

const Overview = () => {
  const userType = 'homeCare';
  const username = 'John Doe';
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [activeYear, setActiveYear] = useState('All');
  const [editMode, setEditMode] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [yearToDelete, setYearToDelete] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newYear, setNewYear] = useState('');
  const [years, setYears] = useState(['All', '2018', '2019', '2020', '2021', '2022', '2023', '2024']);
  const [activeStatistic, setActiveStatistic] = useState('General');

  const activeUsers = Users.filter(user => user.status === "Active");

  useEffect(() => {
    console.log("useEffect triggered");
  
    if (userType === 'homeCare') {
      setActiveCategory('Home Care');
    } else if (userType === 'community') {
      setActiveCategory('Community');
    } else {
      setActiveCategory('Home Care');
    }
  
    if (sessionStorage.getItem('fromLogin') === 'true') {
      setShowWelcomeMessage(true);
      sessionStorage.removeItem('fromLogin');
  
      const audio = new Audio(welcome);
      audio.play();
      
      const timer = setTimeout(() => {
        console.log("Timer elapsed, hiding welcome message");
        setShowWelcomeMessage(false);
      }, 2000);
  
      console.log("Timer set");
  
      return () => {
        console.log("Clearing timer");
        clearTimeout(timer);
      };
    }

    const timer = setTimeout(() => {
      console.log("Timer elapsed, hiding welcome message");
      setShowWelcomeMessage(false);
    }, 2000);

  }, [userType]);

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

  const handleStatisticToggle = (statistic) => {
    setActiveStatistic(statistic);
  };

  if (showWelcomeMessage) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-bb-violet">
        <div className="bg-white text-bb-violet text-2xl p-6 rounded-lg shadow-md">
          Welcome, {username}
        </div>
      </div>
    );
  }

  return (
    <>
      <Appbar />

      {/* Main Content */}
      <div className="bg-white p-6 rounded-lg w-full"><h1 class="header">Overview</h1>
        <hr className="my-4 border-t-2 border-bb-violet" />
        {/* Tabs */}
        <div className="mb-2 text-lg font-bold text-bb-violet">Category:</div>
        <div className="flex space-x-4 mb-4">
          {userType === 'superUser' && (
            <>
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
            </>
          )}
          {userType === 'homeCare' && (
            <ToggleButton
              category="Home Care"
              isActive={true}
              onClick={() => handleCategoryToggle('Home Care')}
            >
              Home Care
            </ToggleButton>
          )}
          {userType === 'community' && (
            <ToggleButton
              category="Community"
              isActive={true}
              onClick={() => handleCategoryToggle('Community')}
            >
              Community
            </ToggleButton>
          )}
          {userType === 'superUser' && (
            <Popover>
              <PopoverTrigger as="div" className="relative">
                <Button className="bg-bb-violet text-white">
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
          )}
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

        {/* Statistic Toggle and Display */}
        <div className="mb-2 text-lg font-bold text-bb-violet">Statistics:</div>
        <div className="flex">
          <div className="flex flex-col space-y-2">
            {Object.keys(statisticsData).map(category => (
              <ToggleButton
                key={category}
                category={category}
                isActive={activeStatistic === category}
                onClick={() => handleStatisticToggle(category)}
                showIcon={false}
              >
                {category}
              </ToggleButton>
            ))}
          </div>
          <div className="flex-grow ml-4 mr-10 space-y-2">
            {statisticsData[activeStatistic] && (
              <>
                {statisticsData[activeStatistic].map((statistic, index) => (
                  <StatisticCard
                    key={index}
                    label={statistic.label}
                    value={statistic.valueKey} 
                  />
                ))}
              </>
            )}
          </div>
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
          {activeUsers.map((user, index) => (
            <UserCard
              key={index}
              name={user.pangalan}
              ageRange={user.edad}
              gender={user.kasarian}
              year={user.yearAdmitted}
              category={user.program}
              profileLink={`/profile`}
              avatar={user.picture}
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
