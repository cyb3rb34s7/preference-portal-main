
import { useState } from "react";
import { ContentStyle, ContentItem } from "@/types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ContentRowProps {
  style: ContentStyle;
  topicTitle: string;
  topicId: string;
  contentItems: ContentItem[];
  onSelectContent: (contentId: string, style: ContentStyle) => void;
  onSelectTopic: (topicId: string) => void;
  selectedItems: Record<string, ContentStyle>;
  selectedTopicId: string | null;
}

const ContentRow = ({
  style,
  topicTitle,
  topicId,
  contentItems,
  onSelectContent,
  onSelectTopic,
  selectedItems,
  selectedTopicId
}: ContentRowProps) => {
  // Style classes based on content style
  const getStyleClasses = () => {
    switch (style) {
      case 'simple':
        return {
          rowBg: 'bg-simple/5',
          border: 'border-simple/30',
          hover: 'hover:border-simple',
          title: 'text-simple',
          topicCard: 'bg-simple/10 border-simple/30',
          selectedTopic: 'bg-simple border-simple text-white shadow-md shadow-simple/20',
          selectedContent: 'border-simple shadow-md shadow-simple/20',
          radioColor: 'text-simple'
        };
      case 'attractive':
        return {
          rowBg: 'bg-attractive/5',
          border: 'border-attractive/30',
          hover: 'hover:border-attractive',
          title: 'text-attractive',
          topicCard: 'bg-attractive/10 border-attractive/30',
          selectedTopic: 'bg-attractive border-attractive text-white shadow-md shadow-attractive/20',
          selectedContent: 'border-attractive shadow-md shadow-attractive/20',
          radioColor: 'text-attractive'
        };
      case 'genz':
        return {
          rowBg: 'bg-genz/5',
          border: 'border-genz/30',
          hover: 'hover:border-genz',
          title: 'text-genz',
          topicCard: 'bg-genz/10 border-genz/30',
          selectedTopic: 'bg-genz border-genz text-white shadow-md shadow-genz/20',
          selectedContent: 'border-genz shadow-md shadow-genz/20',
          radioColor: 'text-genz'
        };
    }
  };

  const classes = getStyleClasses();

  return (
    <div className={`p-6 mb-8 rounded-xl ${classes.rowBg}`}>
      {/* Topic Bait Card */}
      <div 
        className={`mb-4 p-4 border rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 topic-bait-card
                   ${topicId === selectedTopicId ? classes.selectedTopic : classes.topicCard}`}
        onClick={() => onSelectTopic(topicId)}
      >
        <div className={`radio-button ${topicId === selectedTopicId ? 'selected' : ''} ${classes.radioColor}`}>
          <div className="inner-circle"></div>
        </div>
        
        <h3 className={`font-bold text-xl ${topicId === selectedTopicId ? 'text-white' : classes.title}`}>
          {topicTitle}
        </h3>
      </div>

      {/* Content Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {contentItems.map((item) => {
          const isSelected = selectedItems[item.id] === style;
          
          return (
            <div 
              key={`${item.id}-${style}`}
              className={`content-card rounded-lg border p-4 transition-all duration-200 
                        ${isSelected ? classes.selectedContent : classes.border} ${classes.hover}`}
              onClick={() => onSelectContent(item.id, style)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-32 object-cover rounded-md mb-3"
              />
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600 mb-4">
                {item.descriptions[style]}
              </p>
              <div className="flex justify-center mt-2">
                <div 
                  className={`radio-button ${isSelected ? 'selected' : ''} ${classes.radioColor}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSelected) {
                      // Allow deselection by passing null as style
                      onSelectContent(item.id, null as any);
                    } else {
                      onSelectContent(item.id, style);
                    }
                  }}
                >
                  <div className="inner-circle"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContentRow;
