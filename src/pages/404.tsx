import React from 'react';
import { NoDataTemplate } from '@ui/templates';

type Props = {};

const browser = typeof window !== 'undefined' && window;

const NotFoundPage: React.FC<Props> = ({}) => {
  return browser ? <NoDataTemplate /> : null;
};

export default NotFoundPage;
