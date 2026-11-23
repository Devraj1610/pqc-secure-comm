import React from 'react';
import NavBar from './NavBar';
import BackgroundStack from '../../theme/BackgroundStack';
import { useDashboardState } from '../../hooks/useDashboardState';
import AnalyticsPanel from '../panels/AnalyticsPanel';
import InfrastructurePanel from '../panels/InfrastructurePanel';

const DashboardShell = ({ children }) => {
  const { activeLane, activeTab } = useDashboardState();

  return (
    <BackgroundStack variant="supervisor" activeLane={activeLane} className="h-screen flex flex-col overflow-hidden font-sans">
      <NavBar />
      <main className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4 lg:p-6 relative z-10 flex flex-col justify-between">
        <div className="max-w-[1920px] mx-auto w-full">
          {(!activeTab || activeTab === 'Dashboard') && children}
          {activeTab === 'Analytics' && <AnalyticsPanel />}
          {activeTab === 'Infrastructure' && <InfrastructurePanel />}
        </div>
        <footer className="max-w-[1920px] mx-auto w-full mt-8 pt-4 border-t border-[var(--edge-rest)] flex items-center justify-between flex-wrap gap-2 text-[10px] sm:text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider font-mono">
          <div className="flex items-center gap-2">
            <span className="font-medium text-[var(--text-secondary)]">PQC Secure Comm</span>
            <span className="opacity-50">•</span>
            <span>Supervisor Console</span>
          </div>
          <div>
            <span>Copyright © 2026 Akarsh Sujay Kumar. All rights reserved.</span>
          </div>
        </footer>
      </main>
    </BackgroundStack>
  );
};

export default DashboardShell;
