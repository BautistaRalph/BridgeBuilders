import React from 'react';
import Appbar from '@/components/ui/Appbar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/FormTabs';

export default function Forms() {
  return (
    <>
      <Appbar />
      <Tabs className="formtabs-vertical" defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div>Content for Tab 1</div>
        </TabsContent>
        <TabsContent value="tab2">
          <div>Content for Tab 2</div>
        </TabsContent>
        <TabsContent value="tab3">
          <div>Content for Tab 3</div>
        </TabsContent>
      </Tabs>
    </>
  );
}
