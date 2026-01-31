import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './Button';
import { ShieldAlert } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-6 text-center">
          <ShieldAlert className="w-16 h-16 text-[#C6A87C] mb-6 opacity-80" />
          <h1 className="font-heading font-bold text-2xl text-white uppercase mb-2">Algo inesperado aconteceu</h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Nossos sistemas de monitoramento foram notificados. Por favor, recarregue a página para tentar novamente.
          </p>
          <Button variant="primary" onClick={() => window.location.reload()}>
            Recarregar Página
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;