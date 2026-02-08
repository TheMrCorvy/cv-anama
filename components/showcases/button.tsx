import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Spinner from '../ui/Spinner';

export function ButtonShowcase() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-card-foreground mb-2">Button</h2>
                <p className="text-muted-foreground mb-4">
                    A button component with different variants and sizes.
                </p>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium text-card-foreground">Variants</h3>
                <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium text-card-foreground">Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <Button size="default">Default</Button>
                    <Button size="sm">Small</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon" className="h-10 w-10">
                        <Menu className="h-4 w-4" />
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-lg font-medium text-card-foreground">States</h3>
                <div className="flex flex-wrap gap-4">
                    <Button>Default</Button>
                    <Button disabled>Disabled</Button>
                    <Button variant="outline" className="relative">
                        <span className="opacity-0">Loading</span>
                        <Spinner />
                    </Button>
                </div>
            </div>
        </div>
    );
}
