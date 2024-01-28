import { logger } from '@/lib/helpers';
import React, { ErrorInfo, ReactNode } from 'react';

type Props = {
  fallback: string | React.ReactNode;
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};
export class ErrorBoundary extends React.Component<Props, State> {
   

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(err: Error) {
    return { hasError: true };
  }

  componentDidCatch(err: Error, errInfo: ErrorInfo): void {
    logger({ description: 'componentDidCatch', err: errInfo });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
