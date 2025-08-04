import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SectionWrapper, Badge, BadgeContainer } from '../../styles/StyledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faAward, faTrash, faExclamationTriangle, faClock, faCheck } from '@fortawesome/free-solid-svg-icons';
import RestaurantReviewForm from '../comments/RestaurantReviewForm';

const HoursRatingsContainer = styled(SectionWrapper)`
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

const FlexContainer = styled.div`
  display: flex;
  gap: ${props => props.gap || '1rem'};
  
  @media (max-width: 992px) {
    flex-direction: ${props => props.mobileDirection || 'row'};
  }
`;

const EqualHeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 992px) {
    width: 100% !important;
  }
`;

const HoursSection = styled.div`
  padding: 2rem;
  border-radius: var(--border-radius);
  background-color: #FFF9F5;
  box-shadow: var(--box-shadow);
  border-left: 4px solid var(--primary-red);
  
  h3 {
    position: relative;
    color: var(--primary-red);
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 70px;
      height: 3px;
      background: var(--gradient-primary);
    }
  }
  
  .hour-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    
    .day {
      font-weight: 600;
    }
    
    .time {
      color: var(--text-gray);
    }
    
    &.highlight {
      padding: 0.5rem;
      background-color: rgba(255, 215, 0, 0.1);
      border-radius: 5px;
      margin: 1rem 0;
    }
  }
`;

const FormContainer = styled.div`
  height: 500px;
  overflow-y: auto;
  margin-top: 1.5rem;
  padding-right: 0.5rem;
  border-radius: var(--border-radius);
  background-color: #FFF9F5;
  box-shadow: var(--box-shadow);
  border-left: 4px solid var(--primary-red);
  
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

const RatingsSection = styled.div`
  flex: 2;
  
  h3 {
    position: relative;
    color: var(--primary-red);
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 70px;
      height: 3px;
      background: var(--gradient-primary);
    }
  }
`;

const RatingHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  
  .rating-number {
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--primary-red);
    margin-right: 1.5rem;
  }
  
  .rating-stars {
    color: var(--primary-gold);
    font-size: 1.5rem;
    letter-spacing: 3px;
  }
  
  .rating-count {
    margin-left: 1rem;
    color: var(--text-gray);
  }
`;

const TestimonialsContainer = styled.div`
  height: 500px;
  overflow-y: auto;
  margin-bottom: 2rem;
  padding-right: 0.5rem;
  
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
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
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
  
  svg {
    font-size: 2rem;
    color: var(--text-gray);
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-gray);
  }
`;

const HoursRatings = () => {
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

  return (
    <HoursRatingsContainer>
      <ContentWrapper>
        <FlexContainer gap="3rem" mobileDirection="column">
          <EqualHeightContainer style={{ width: '50%' }}>
            <HoursSection>
              <h3>
                <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px' }} /> Opening Hours
              </h3>
              <div className="hour-row">
                <span className="day">Monday - Friday</span>
                <span className="time">10:00 AM - 9:00 PM</span>
              </div>
              <div className="hour-row">
                <span className="day">Saturday - Sunday</span>
                <span className="time">10:00 AM - 10:00 PM</span>
              </div>
              <div className="hour-row highlight">
                <span className="day">Food Service</span>
                <span className="time">11:00 AM onwards</span>
              </div>
              <p>* Last orders taken 30 minutes before closing time</p>
              
              <BadgeContainer>
                <Badge color="var(--primary-gold)">
                  <FontAwesomeIcon icon={faCheck} /> Dine-in
                </Badge>
                <Badge color="var(--primary-red)" textColor="var(--text-light)">
                  <FontAwesomeIcon icon={faCheck} /> Takeaway
                </Badge>
                <Badge color="var(--primary-purple)" textColor="var(--text-light)">
                  <FontAwesomeIcon icon={faCheck} /> Delivery
                </Badge>
              </BadgeContainer>
            </HoursSection>
            
            {/* Review Form with fixed height and scroll */}
            <FormContainer>
              <RestaurantReviewForm />
            </FormContainer>
          </EqualHeightContainer>
          
          <EqualHeightContainer style={{ width: '50%' }}>
            <RatingsSection id="testimonials">
              <h3>
                <FontAwesomeIcon icon={faAward} style={{ marginRight: '10px' }} /> Customer Ratings
              </h3>
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
              
              <TestimonialsContainer>
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
            </RatingsSection>
          </EqualHeightContainer>
        </FlexContainer>
      </ContentWrapper>
    </HoursRatingsContainer>
  );
};

export default HoursRatings; 