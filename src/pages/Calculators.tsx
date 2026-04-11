import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calculator, TrendingUp, Info } from 'lucide-react';
import { calculateEMI, calculateSIP, formatIndianCurrency } from '../utils/calculations';

type TabType = 'emi' | 'sip';

const COLORS = ['#0D2447', '#E8A920'];

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (val: number) => void;
  prefix?: string;
  suffix?: string;
  formatValue?: (val: number) => string;
}

const SliderInput: React.FC<SliderInputProps> = ({
  label, value, min, max, step, onChange, prefix = '', suffix = '',
  formatValue,
}) => {
  const displayValue = formatValue ? formatValue(value) : `${prefix}${value.toLocaleString('en-IN')}${suffix}`;

  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <div className="flex items-center justify-between" style={{ marginBottom: '0.6rem' }}>
        <label style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', fontWeight: 500, color: '#343A40' }}>
          {label}
        </label>
        <span style={{
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: 700,
          fontSize: '0.9rem',
          color: '#0A1628',
          background: '#F1F3F5',
          padding: '0.2rem 0.75rem',
          borderRadius: '6px',
        }}>
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer appearance-none"
        style={{
          height: '6px',
          borderRadius: '99px',
          background: `linear-gradient(to right, #E8A920 ${((value - min) / (max - min)) * 100}%, #E9ECEF ${((value - min) / (max - min)) * 100}%)`,
          outline: 'none',
          accentColor: '#E8A920',
        }}
      />
      <div className="flex justify-between" style={{ marginTop: '0.35rem' }}>
        <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', color: '#ADB5BD' }}>{prefix}{min.toLocaleString('en-IN')}{suffix}</span>
        <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', color: '#ADB5BD' }}>{prefix}{max.toLocaleString('en-IN')}{suffix}</span>
      </div>
    </div>
  );
};

interface ResultCardProps {
  label: string;
  value: string;
  highlight?: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ label, value, highlight }) => (
  <div style={{
    borderRadius: '14px',
    padding: '1.1rem 1.25rem',
    background: highlight ? '#0D2447' : '#F8F9FA',
    border: highlight ? 'none' : '1px solid #E2E8F0',
  }}>
    <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.75rem', fontWeight: 500, color: highlight ? 'rgba(255,255,255,0.5)' : '#6C757D', marginBottom: '0.3rem' }}>{label}</p>
    <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', fontWeight: 700, color: highlight ? '#E8A920' : '#0D2447', lineHeight: 1.2 }}>{value}</p>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', borderRadius: '10px', boxShadow: '0 4px 20px rgba(10,22,40,0.12)', border: '1px solid #F1F3F5', padding: '0.6rem 0.85rem' }}>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', fontWeight: 500, color: '#343A40' }}>{payload[0].name}</p>
        <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#E8A920' }}>{formatIndianCurrency(payload[0].value)}</p>
      </div>
    );
  }
  return null;
};

const EMICalculator: React.FC = () => {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(180);

  const result = calculateEMI(principal, rate, tenure);

  const pieData = [
    { name: 'Principal', value: result.principalAmount },
    { name: 'Total Interest', value: result.totalInterest },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div>
        <SliderInput
          label="Loan Amount"
          value={principal}
          min={50000}
          max={10000000}
          step={50000}
          onChange={setPrincipal}
          prefix="₹"
          formatValue={(v) => formatIndianCurrency(v)}
        />
        <SliderInput
          label="Annual Interest Rate"
          value={rate}
          min={5}
          max={24}
          step={0.1}
          onChange={setRate}
          suffix="% p.a."
        />
        <SliderInput
          label="Loan Tenure"
          value={tenure}
          min={6}
          max={360}
          step={6}
          onChange={setTenure}
          formatValue={(v) => `${v} months (${(v / 12).toFixed(1)} yrs)`}
        />

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
          <ResultCard label="Monthly EMI" value={formatIndianCurrency(result.monthlyEMI)} highlight />
          <ResultCard label="Total Interest" value={formatIndianCurrency(result.totalInterest)} />
          <ResultCard label="Total Payable" value={formatIndianCurrency(result.totalAmount)} />
        </div>

        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="font-body text-xs text-amber-700">
            This is an indicative calculation. Actual EMI may vary based on lender processing fees and disbursement schedule.
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-heading text-[#0A1628] text-lg font-semibold mb-6 text-center">
          Principal vs Interest Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              formatter={(value) => (
                <span className="font-body text-sm text-gray-700">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center mt-2">
          <p className="font-body text-gray-500 text-sm">
            Interest is{' '}
            <strong className="text-[#E8A920]">
              {result.totalAmount > 0
                ? `${((result.totalInterest / result.totalAmount) * 100).toFixed(1)}%`
                : '0%'}
            </strong>{' '}
            of total repayment
          </p>
        </div>
      </div>
    </div>
  );
};

const SIPCalculator: React.FC = () => {
  const [monthly, setMonthly] = useState(5000);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = calculateSIP(monthly, returnRate, years);

  const pieData = [
    { name: 'Invested Amount', value: result.investedAmount },
    { name: 'Estimated Returns', value: result.estimatedReturns },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div>
        <SliderInput
          label="Monthly Investment (SIP)"
          value={monthly}
          min={500}
          max={100000}
          step={500}
          onChange={setMonthly}
          prefix="₹"
          formatValue={(v) => formatIndianCurrency(v)}
        />
        <SliderInput
          label="Expected Annual Return"
          value={returnRate}
          min={4}
          max={30}
          step={0.5}
          onChange={setReturnRate}
          suffix="% p.a."
        />
        <SliderInput
          label="Investment Period"
          value={years}
          min={1}
          max={40}
          step={1}
          onChange={setYears}
          suffix=" years"
        />

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
          <ResultCard label="Total Value" value={formatIndianCurrency(result.totalValue)} highlight />
          <ResultCard label="Invested" value={formatIndianCurrency(result.investedAmount)} />
          <ResultCard label="Est. Returns" value={formatIndianCurrency(result.estimatedReturns)} />
        </div>

        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="font-body text-xs text-amber-700">
            Financial projections and returns shown are estimated and not guaranteed. Validated against current lending rates.
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-heading text-[#0A1628] text-lg font-semibold mb-6 text-center">
          Investment vs Returns Breakdown
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              dataKey="value"
            >
              {pieData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              formatter={(value) => (
                <span className="font-body text-sm text-gray-700">{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center mt-2">
          <p className="font-body text-gray-500 text-sm">
            Total Returns:{' '}
            <strong className="text-[#C9A84C]">
              {result.totalValue > 0
                ? `${((result.estimatedReturns / result.investedAmount) * 100).toFixed(0)}%`
                : '0%'}
            </strong>{' '}
            returns on investment
          </p>
        </div>
      </div>
    </div>
  );
};

const Calculators: React.FC = () => {
  const [tab, setTab] = useState<TabType>('emi');

  return (
    <>
      <Helmet>
        <title>Financial Calculators | Vinayak Finserv</title>
        <meta
          name="description"
          content="Use Vinayak Finserv's free EMI and SIP calculators to plan your loans and investments. Real-time calculations with pie chart breakdowns."
        />
      </Helmet>

      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(150deg, #0D2447 0%, #1A3A6B 55%, #2563B0 100%)', paddingTop: '7.5rem', paddingBottom: '4.5rem' }}>
        <div className="absolute inset-0 mesh-overlay" />
        <div className="absolute inset-0 grid-overlay opacity-15" />
        <div className="container-site relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="section-label"
          >
            Free Tools
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 700, color: '#ffffff', lineHeight: 1.2, marginBottom: '0.85rem' }}
          >
            Financial Calculators
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}
          >
            Plan your loans and investments with our free, real-time EMI and SIP calculators.
          </motion.p>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding" style={{ background: '#F8F9FA' }}>
        <div className="container-site">
          {/* Centered inner wrapper — limits width & centers content */}
          <div style={{ maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Tab switcher */}
          <div
            className="flex max-w-xs mx-auto mb-10"
            style={{ background: '#ffffff', borderRadius: '12px', padding: '4px', boxShadow: '0 1px 8px rgba(10,22,40,0.07)', border: '1px solid #F1F3F5' }}
          >
            {(['emi', 'sip'] as TabType[]).map((t) => (
              <button
                key={t}
                id={`tab-${t}`}
                onClick={() => setTab(t)}
                className="flex-1 flex items-center justify-center gap-1.5 transition-all duration-250"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  padding: '0.6rem 1rem',
                  borderRadius: '9px',
                  background: tab === t ? '#0D2447' : 'transparent',
                  color: tab === t ? '#ffffff' : '#6C757D',
                  boxShadow: tab === t ? '0 2px 8px rgba(13,36,71,0.2)' : 'none',
                }}
              >
                {t === 'emi' ? <Calculator size={14} /> : <TrendingUp size={14} />}
                {t === 'emi' ? 'EMI Calculator' : 'SIP Calculator'}
              </button>
            ))}
          </div>

          {/* Calculator panel */}
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32 }}
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              boxShadow: '0 4px 36px rgba(10,22,40,0.07)',
              border: '1px solid #F1F3F5',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
            }}
          >
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', fontWeight: 700, color: '#0A1628', marginBottom: '0.4rem' }}>
                {tab === 'emi' ? 'EMI Calculator' : 'SIP Calculator'}
              </h2>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.825rem', color: '#6C757D', lineHeight: 1.6 }}>
                {tab === 'emi'
                  ? 'Formula: EMI = [P × R × (1+R)^N] ÷ [(1+R)^N − 1]'
                  : 'Formula: M × ({[1+r]^n − 1} ÷ r) × (1+r)'}
              </p>
            </div>

            {tab === 'emi' ? <EMICalculator /> : <SIPCalculator />}
          </motion.div>

          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.72rem', color: '#ADB5BD', textAlign: 'center', marginTop: '1.25rem' }}>
            All calculations are for illustrative purposes only. Please consult a Vinayak Finserv advisor for personalised financial advice.
          </p>
          </div>{/* end centered inner wrapper */}
        </div>
      </section>
    </>
  );
};

export default Calculators;
