import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-top: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--primary-gold);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  font-family: inherit;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary-gold);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: var(--border-radius);
  background: var(--gradient-primary);
  color: var(--text-light);
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Message = styled.div`
  padding: 0.8rem;
  margin-top: 1rem;
  border-radius: var(--border-radius);
  text-align: center;
  
  &.success {
    background-color: rgba(76, 175, 80, 0.2);
    color: #4CAF50;
  }
  
  &.error {
    background-color: rgba(244, 67, 54, 0.2);
    color: #F44336;
  }
`;

const CommentList = styled.div`
  margin-top: 2rem;
`;

const CommentItem = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 3px solid var(--primary-gold);
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const CommentName = styled.span`
  color: var(--primary-gold);
`;

const CommentDate = styled.span`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`;

const CommentText = styled.p`
  margin: 0;
  color: var(--text-light);
`;

const NoComments = styled.p`
  color: var(--text-light);
  font-style: italic;
  opacity: 0.7;
  text-align: center;
`;

const CommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState({ show: false, type: '', message: '' });

  // Load comments from localStorage when component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({
        show: true,
        type: 'error',
        message: 'Please fill all fields.'
      });
      return;
    }
    
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus({
        show: true,
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Create new comment
    const newComment = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toLocaleDateString()
    };
    
    // Add to comments array
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    
    // Save to localStorage
    localStorage.setItem('comments', JSON.stringify(updatedComments));
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    
    // Show success message
    setStatus({
      show: true,
      type: 'success',
      message: 'Thank you for your comment!'
    });
    
    // Hide message after 3 seconds
    setTimeout(() => {
      setStatus({ show: false, type: '', message: '' });
    }, 3000);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </FormGroup>
        <FormGroup>
          <Input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </FormGroup>
        <FormGroup>
          <TextArea 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
        </FormGroup>
        <SubmitButton type="submit">Submit Comment</SubmitButton>
      </Form>
      
      {status.show && (
        <Message className={status.type}>
          {status.message}
        </Message>
      )}
      
      {comments.length > 0 && (
        <CommentList>
          <h4 style={{ marginBottom: '1rem', color: 'var(--primary-gold)' }}>Recent Comments</h4>
          {comments.map((comment) => (
            <CommentItem key={comment.id}>
              <CommentHeader>
                <CommentName>{comment.name}</CommentName>
                <CommentDate>{comment.date}</CommentDate>
              </CommentHeader>
              <CommentText>{comment.message}</CommentText>
            </CommentItem>
          ))}
        </CommentList>
      )}
      
      {comments.length === 0 && (
        <NoComments>No comments yet. Be the first to comment!</NoComments>
      )}
    </FormContainer>
  );
};

export default CommentForm;
