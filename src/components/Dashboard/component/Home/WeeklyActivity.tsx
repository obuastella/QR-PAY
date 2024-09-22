/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { WeeklyActivityData } from '../objects/FilterIOptions';
import { WeeklyActivityDataPoint } from '../../types/types';
import { RxCaretDown, RxCaretUp } from 'react-icons/rx';

export const WeeklyActivity: React.FC = () => {
  const [barSize, setBarSize] = useState<number>(16);
  const [isChartVisible, setIsChartVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setBarSize(16);
        setIsChartVisible(true);
      } else if (window.innerWidth >= 1024) {
        setBarSize(14);
      } else if (window.innerWidth >= 768) {
        setBarSize(13);
      } else {
        setBarSize(12);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderLegend = (props: any) => {
    const { payload } = props;
    if (!payload) return null;
    return (
      <ul className="flex justify-end text-sm text-gray-500 mb-2">
        {payload.map((entry: any, index: number) => (
          <li key={`item-${index}`} className="flex items-center ml-4">
            <span
              className="w-3 h-3 inline-block rounded-full mr-1"
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="p-4 px-0">
      <div className="flex items-center justify-between px-4">
        <h3 className="text-lg font-semibold text-[#343C6A] mb-2">Weekly Activity</h3>

        <button
          onClick={() => setIsChartVisible(!isChartVisible)}
          className="xl:hidden text-sm text-[#343C6A] underline flex items-center"
        >
          {isChartVisible ? <RxCaretDown className="text-3xl" /> : <RxCaretUp className="text-3xl" />}
        </button>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isChartVisible ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="h-60 w-full bg-[#F8F8F8] rounded-[20px] mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={WeeklyActivityData as WeeklyActivityDataPoint[]}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              barSize={barSize}
            >
              <CartesianGrid strokeDasharray="1 1" horizontal={true} vertical={false} />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Legend verticalAlign="top" align="right" content={renderLegend} />
              <Bar dataKey="sent" fill="#990D0D80" radius={[10, 10, 10, 10]} />
              <Bar dataKey="received" fill="#0D992480" radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
