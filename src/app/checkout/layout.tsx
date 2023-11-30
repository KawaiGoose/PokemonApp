"use client"
import React, { ReactNode } from 'react';
import theme from '../../theme'; // 确保路径正确
import { ThemeProvider } from '@mui/material/styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={layoutStyle}>
        {children}
      </div>
    </ThemeProvider>
  );
};

const layoutStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  flexDirection: 'column',
  textAlign: 'center',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.primary.main,
  fontSize: theme.typography.h2.fontSize,
  
};

export default Layout;
