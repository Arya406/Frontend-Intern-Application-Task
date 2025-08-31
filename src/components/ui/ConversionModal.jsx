import React, { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import Icon from '../AppIcon';

const ConversionModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    learningGoals: '',
    currentGrade: '',
    subjects: [],
    studyTime: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 3;

  const learningGoalOptions = [
    { value: 'improve-grades', label: 'Improve my grades' },
    { value: 'test-prep', label: 'Prepare for tests/exams' },
    { value: 'catch-up', label: 'Catch up on missed concepts' },
    { value: 'get-ahead', label: 'Get ahead of my class' },
    { value: 'homework-help', label: 'Get help with homework' }
  ];

  const gradeOptions = [
    { value: '6', label: '6th Grade' },
    { value: '7', label: '7th Grade' },
    { value: '8', label: '8th Grade' },
    { value: '9', label: '9th Grade' },
    { value: '10', label: '10th Grade' },
    { value: '11', label: '11th Grade' },
    { value: '12', label: '12th Grade' },
    { value: 'college', label: 'College' }
  ];

  const subjectOptions = [
    { value: 'math', label: 'Mathematics' },
    { value: 'science', label: 'Science' },
    { value: 'english', label: 'English' },
    { value: 'history', label: 'History' },
    { value: 'foreign-language', label: 'Foreign Language' },
    { value: 'other', label: 'Other' }
  ];

  const studyTimeOptions = [
    { value: '15-30', label: '15-30 minutes per day' },
    { value: '30-60', label: '30-60 minutes per day' },
    { value: '1-2', label: '1-2 hours per day' },
    { value: '2+', label: '2+ hours per day' }
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData?.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      
      if (!formData?.name) {
        newErrors.name = 'Name is required';
      }
    }

    if (step === 2) {
      if (!formData?.learningGoals) {
        newErrors.learningGoals = 'Please select your learning goal';
      }
      
      if (!formData?.currentGrade) {
        newErrors.currentGrade = 'Please select your grade level';
      }
    }

    if (step === 3) {
      if (!formData?.subjects || formData?.subjects?.length === 0) {
        newErrors.subjects = 'Please select at least one subject';
      }
      
      if (!formData?.studyTime) {
        newErrors.studyTime = 'Please select your available study time';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success - redirect to trial dashboard or show success message
      console.log('Trial signup successful:', formData);
      
      // Reset form and close modal
      setFormData({
        email: '',
        name: '',
        learningGoals: '',
        currentGrade: '',
        subjects: [],
        studyTime: ''
      });
      setCurrentStep(1);
      onClose();
      
      // Show success message or redirect
      alert('Welcome to your free trial! Check your email for next steps.');
      
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ submit: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-modal-backdrop bg-black/50 flex items-center justify-center p-4 animation-fade-in">
      <div className="bg-card rounded-lg shadow-modal max-w-md w-full max-h-[90vh] overflow-y-auto animation-modal-appear z-modal">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-card-foreground">
              Start Your Free Trial
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Step {currentStep} of {totalSteps}
            </p>
          </div>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="text-muted-foreground hover:text-card-foreground transition-colors duration-250 disabled:opacity-50"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4">
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Let's get started!
                </h3>
                <p className="text-muted-foreground">
                  Tell us a bit about yourself to personalize your learning experience.
                </p>
              </div>

              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                error={errors?.name}
                required
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                description="We'll send your trial access details here"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  What's your goal?
                </h3>
                <p className="text-muted-foreground">
                  Help us understand what you want to achieve.
                </p>
              </div>

              <Select
                label="Primary Learning Goal"
                options={learningGoalOptions}
                value={formData?.learningGoals}
                onChange={(value) => handleInputChange('learningGoals', value)}
                error={errors?.learningGoals}
                placeholder="Select your main goal"
                required
              />

              <Select
                label="Current Grade Level"
                options={gradeOptions}
                value={formData?.currentGrade}
                onChange={(value) => handleInputChange('currentGrade', value)}
                error={errors?.currentGrade}
                placeholder="Select your grade"
                required
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  Almost done!
                </h3>
                <p className="text-muted-foreground">
                  Let's customize your learning plan.
                </p>
              </div>

              <Select
                label="Subjects You Need Help With"
                options={subjectOptions}
                value={formData?.subjects}
                onChange={(value) => handleInputChange('subjects', value)}
                error={errors?.subjects}
                placeholder="Select subjects"
                multiple
                required
              />

              <Select
                label="Available Study Time"
                options={studyTimeOptions}
                value={formData?.studyTime}
                onChange={(value) => handleInputChange('studyTime', value)}
                error={errors?.studyTime}
                placeholder="How much time can you dedicate?"
                required
              />
            </div>
          )}

          {errors?.submit && (
            <div className="mt-4 p-3 bg-error/10 border border-error/20 rounded-md">
              <p className="text-error text-sm">{errors?.submit}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={currentStep === 1 || isSubmitting}
              className="px-6"
            >
              Back
            </Button>

            <Button
              variant="default"
              onClick={handleNext}
              loading={isSubmitting}
              className="btn-cta px-6"
            >
              {currentStep === totalSteps ? 'Start My Trial' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionModal;