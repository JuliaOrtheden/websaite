import React from 'react';
import Header from '@/components/Header';
import ReferenceCase from '@/components/ReferenceCase';

const ReferenceCases = () => {
  return (
    <div className="min-h-screen bg-[#0f1116]">
      <Header />
      <div className="pt-20">
        <ReferenceCase
          title="Case Study: Company A"
          description="See how Company A increased their productivity by 200% using our solution."
          imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
        />
        <ReferenceCase
          title="Case Study: Company B"
          description="Learn how Company B reduced costs by 50% after implementing our platform."
          imageUrl="https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
      </div>
    </div>
  );
};

export default ReferenceCases;