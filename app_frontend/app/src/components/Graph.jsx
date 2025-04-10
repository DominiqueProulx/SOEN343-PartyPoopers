import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { format } from "date-fns";
import { Typography, Box } from "@mui/material";

const GraphComponent = ({ eventData, eventName }) => {
    return (
      <Box sx={{ mb: 5 }}>
        <Typography variant="h6" align="center" gutterBottom>
          {eventName} – Attendee Growth Over Time
        </Typography>
  
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={eventData}
            margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tickFormatter={(str) => format(new Date(str), "MMM d, HH:mm")}
            >
              <Label value="Time" position="insideBottom" offset={-15} />
            </XAxis>
            <YAxis allowDecimals={false}>
              <Label
                value="Number of Attendees"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              />
            </YAxis>
            <Tooltip
              labelFormatter={(label) => format(new Date(label), "MMM d, HH:mm")}
            />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#1976d2"
              strokeWidth={2}
              dot
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    );
  };
  

export default GraphComponent;
