import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SectionWrapper } from '../../styles/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faAward, faTrash, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const RatingsContainer = styled(SectionWrapper)`
  background-color: #f9f9f9;
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23D32F2F' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.4;
    z-index: -1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: var(--primary-red);
  margin-bottom: 3rem;
  font-size: 2.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--gradient-primary);
  }
`;

const RatingHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  
  .rating-number {
    font-size: 4rem;
    font-weight: 700;
    color: var(--primary-red);
    margin-right: 1.5rem;
    line-height: 1;
  }
  
  .rating-stars {
    color: var(--primary-gold);
    font-size: 1.5rem;
    letter-spacing: 3px;
    margin-bottom: 0.5rem;
  }
  
  .rating-count {
    color: var(--text-gray);
  }
`;

const TestimonialsContainer = styled.div`
  max-height: ${props => props.embedded ? 'unset' : '600px'};
  overflow-y: auto;
  margin-bottom: 2rem;
  padding-right: 0.5rem;
  display: grid;
  grid-template-columns: ${props => props.embedded ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))'};
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: var(--primary-gold);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #d4af37;
  }
`;

const TestimonialCard = styled.div`
  padding: 1.5rem;
  border-radius: var(--border-radius);
  background-color: #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  position: relative;
  transition: var(--transition);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .quote-icon {
    font-size: 1.5rem;
    color: rgba(211, 47, 47, 0.1);
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  
  .testimonial-text {
    font-style: italic;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    line-height: 1.6;
    flex-grow: 1;
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f0f0f0;
    padding-top: 1rem;
    margin-top: auto;
    
    .author-info {
      display: flex;
      flex-direction: column;
    }
    
    .author-name {
      font-weight: 600;
    }
    
    .author-detail {
      font-size: 0.9rem;
      color: var(--text-gray);
    }
  }
  
  .rating-stars {
    margin-top: 0.5rem;
    color: var(--primary-gold);
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-red);
  cursor: pointer;
  opacity: 0.7;
  transition: var(--transition);
  padding: 5px;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  border: 1px dashed #ccc;
  border-radius: var(--border-radius);
  margin: 1rem 0;
  grid-column: 1 / -1;
  
  svg {
    font-size: 2rem;
    color: var(--text-gray);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-gray);
  }
`;

const CustomerRatings = ({ showContainerOnly = true }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [averageRating, setAverageRating] = useState(4.8);
  const [reviewCount, setReviewCount] = useState('500+');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Use useMemo to create the defaultTestimonials array that won't change between renders
  const defaultTestimonials = React.useMemo(() => [
    {
      id: 1,
      name: "Priya Sharma",
      detail: "Regular Customer",
      text: "The best Indian sweets I've ever had! Their Gulab Jamun is absolutely divine and the service is always warm and welcoming. A must-visit for anyone with a sweet tooth!",
      rating: 5,
      isDefault: true
    },
    {
      id: 2,
      name: "Rahul Patel",
      detail: "Food Blogger",
      text: "Riddhi Siddhi's thali is a complete meal experience. The flavors are authentic, portion size is generous, and everything tastes homemade. Their custom cakes for special occasions are also exceptional!",
      rating: 5,
      isDefault: true
    }
  ], []);

  const deleteTestimonial = (id) => {
    // If just clicking delete button first time, ask for confirmation
    if (deleteConfirm !== id) {
      setDeleteConfirm(id);
      return;
    }
    
    // If confirmed, delete the testimonial
    try {
      // Get existing testimonials from localStorage
      const savedTestimonials = localStorage.getItem('testimonials');
      if (savedTestimonials) {
        let parsedTestimonials = JSON.parse(savedTestimonials);
        
        // Filter out the testimonial to delete
        parsedTestimonials = parsedTestimonials.filter(item => item.id !== id);
        
        // Save back to localStorage
        localStorage.setItem('testimonials', JSON.stringify(parsedTestimonials));
        
        // Update testimonials in state by filtering out the deleted one
        setTestimonials(prev => prev.filter(item => item.id !== id));
        
        // Reset confirmation state
        setDeleteConfirm(null);
        
        // Recalculate average rating
        updateRatingStatistics(parsedTestimonials);
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };
  
  // Helper function to update average rating and count
  const updateRatingStatistics = (userTestimonials) => {
    if (userTestimonials && userTestimonials.length > 0) {
      const totalRating = userTestimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0);
      const newAverageRating = (totalRating / userTestimonials.length).toFixed(1);
      setAverageRating(newAverageRating);
      
      // Update review count
      const newCount = 500 + userTestimonials.length;
      setReviewCount(`${newCount}+`);
    } else {
      // If no user testimonials, revert to default values
      setAverageRating(4.8);
      setReviewCount('500+');
    }
  };

  // Load user testimonials from localStorage on component mount
  useEffect(() => {
    try {
      const savedTestimonials = localStorage.getItem('testimonials');
      if (savedTestimonials) {
        const parsedTestimonials = JSON.parse(savedTestimonials);
        
        // Combine with default testimonials
        const allTestimonials = [
          ...defaultTestimonials,
          ...parsedTestimonials.map(item => ({ ...item, isUserSubmitted: true }))
        ];
        
        // Show all testimonials, with most recent first
        setTestimonials(allTestimonials);
        
        // Update rating statistics
        updateRatingStatistics(parsedTestimonials);
      } else {
        setTestimonials(defaultTestimonials);
      }
    } catch (error) {
      console.error("Error loading testimonials:", error);
      setTestimonials(defaultTestimonials);
    }
  }, [defaultTestimonials]);

  // Content without container for use in other components
  const renderContent = () => (
    <ContentWrapper>
      {showContainerOnly && (
        <SectionTitle>
          <FontAwesomeIcon icon={faAward} style={{ marginRight: '10px', color: 'var(--primary-gold)' }} /> 
          Customer Ratings
        </SectionTitle>
      )}
      
      {!showContainerOnly && (
        <h3 style={{ color: 'var(--primary-red)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
          <FontAwesomeIcon icon={faAward} style={{ marginRight: '10px', color: 'var(--primary-gold)' }} /> 
          Recent Reviews
        </h3>
      )}
        
        <RatingHeader>
          <div className="rating-number">{averageRating}</div>
          <div>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon 
                  key={i} 
                  icon={faStar} 
                  style={{ opacity: i < Math.floor(averageRating) ? 1 : 0.5 }} 
                />
              ))}
            </div>
            <div className="rating-count">Based on {reviewCount} reviews</div>
          </div>
        </RatingHeader>
        
        <TestimonialsContainer embedded={!showContainerOnly}>
          {testimonials.length > 0 ? (
            testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-detail">{testimonial.detail || 'Customer'}</p>
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon 
                          key={i} 
                          icon={faStar} 
                          style={{ opacity: i < testimonial.rating ? 1 : 0.5 }} 
                        />
                      ))}
                    </div>
                    {testimonial.date && <p className="author-detail">Posted on: {testimonial.date}</p>}
                  </div>
                  
                  {/* Show delete button only for user-submitted testimonials */}
                  {testimonial.isUserSubmitted && (
                    <DeleteButton 
                      onClick={() => deleteTestimonial(testimonial.id)}
                      title={deleteConfirm === testimonial.id ? "Click again to confirm deletion" : "Delete this review"}
                    >
                      {deleteConfirm === testimonial.id ? (
                        <>
                          <FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: '5px' }} />
                          Confirm
                        </>
                      ) : (
                        <FontAwesomeIcon icon={faTrash} />
                      )}
                    </DeleteButton>
                  )}
                </div>
              </TestimonialCard>
            ))
          ) : (
            <EmptyState>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <p>No reviews yet. Be the first to share your experience!</p>
            </EmptyState>
          )}
        </TestimonialsContainer>
      </ContentWrapper>
  );

  // When used as a standalone component, wrap with container
  if (showContainerOnly) {
    return (
      <RatingsContainer id="testimonials">
        {renderContent()}
      </RatingsContainer>
    );
  }
  
  // When used inside another component, render content only
  return renderContent();
};

export default CustomerRatings;
