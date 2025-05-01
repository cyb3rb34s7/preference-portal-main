import { useState, useEffect } from "react";
import { SurveySet as SurveySetType, ContentStyle, UserSelection, TopicSelection } from "@/types";
import ContentRow from "./ContentRow";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";
import { AlertCircle } from "lucide-react";

interface SurveySetProps {
  surveySet: SurveySetType;
  onComplete: (
    contentSelections: UserSelection[],
    topicSelection: TopicSelection
  ) => void;
  previousSelections?: {
    content: UserSelection[];
    topic: TopicSelection;
  };
}

const SurveySet = ({
  surveySet,
  onComplete,
  previousSelections
}: SurveySetProps) => {
  // Track selected content styles for each content item
  const [selectedItems, setSelectedItems] = useState<Record<string, ContentStyle>>({});

  // Track selected topic bait
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  // Validation state
  const [isValid, setIsValid] = useState(false);
  const [showValidationAlert, setShowValidationAlert] = useState(false);

  // Missing selections tracking
  const [missingSelections, setMissingSelections] = useState<{
    contentItems: string[];
    topic: boolean;
  }>({
    contentItems: [],
    topic: true
  });

  // Initialize with previous selections if available
  useEffect(() => {
    if (previousSelections) {
      const contentSelectionMap: Record<string, ContentStyle> = {};
      previousSelections.content.forEach(selection => {
        contentSelectionMap[selection.contentItemId] = selection.selectedStyle;
      });
      setSelectedItems(contentSelectionMap);
      setSelectedTopicId(previousSelections.topic.selectedTopicId);
    }
  }, [previousSelections]);

  // Validate selections whenever they change
  useEffect(() => {
    // Track missing content selections
    const missingContentItems = surveySet.contentItems
      .filter(item => !selectedItems[item.id])
      .map(item => item.title);

    // Check if a topic bait is selected
    const missingTopic = !selectedTopicId;

    setMissingSelections({
      contentItems: missingContentItems,
      topic: missingTopic
    });

    // All content items must have a selection and a topic bait must be selected
    const allContentSelected = missingContentItems.length === 0;
    const hasTopicSelected = !missingTopic;

    setIsValid(allContentSelected && hasTopicSelected);

    // Hide validation alert if everything is valid now
    if (allContentSelected && hasTopicSelected) {
      setShowValidationAlert(false);
    }
  }, [selectedItems, selectedTopicId, surveySet.contentItems]);

  const handleSelectContent = (contentId: string, style: ContentStyle | null) => {
    setSelectedItems(prev => {
      // If style is null (deselection) or already selected, remove it
      if (style === null || prev[contentId] === style) {
        const newState = { ...prev };
        delete newState[contentId];
        return newState;
      } else {
        // Otherwise set the new style
        return {
          ...prev,
          [contentId]: style
        };
      }
    });
  };

  const handleSelectTopic = (topicId: string) => {
    // Toggle selection - if same topic is clicked again, deselect it
    setSelectedTopicId(prevId => prevId === topicId ? null : topicId);
  };

  const handleSubmit = () => {
    // Reset validation state
    setShowValidationAlert(false);

    // First, check topic selection
    const hasTopicSelection = selectedTopicId !== null;
    const missingContentItems = surveySet.contentItems
      .filter(item => !selectedItems[item.id])
      .map(item => item.title);
    const hasAllContentSelections = missingContentItems.length === 0;

    // Show validation errors and prevent submission if anything is missing
    if (!hasTopicSelection || !hasAllContentSelections) {
      setShowValidationAlert(true);

      if (!hasTopicSelection) {
        toast.error("Please select a topic before proceeding");
        return;
      }

      if (!hasAllContentSelections) {
        const itemCount = missingContentItems.length;
        toast.error(`Please select styles for all ${itemCount} items before proceeding`);
        return;
      }
      return;
    }

    // Only if both validations pass, proceed with submission
    const contentSelections: UserSelection[] = Object.entries(selectedItems).map(
      ([contentItemId, selectedStyle]) => ({
        contentItemId,
        selectedStyle
      })
    );

    const topicSelection: TopicSelection = {
      selectedTopicId: selectedTopicId!
    };

    toast.success("Set completed successfully!");
    onComplete(contentSelections, topicSelection);
  };

  // Group content items by style
  const simpleRow = {
    style: 'simple' as ContentStyle,
    topic: surveySet.topicBaits.find(bait => bait.style === 'simple')!
  };

  const attractiveRow = {
    style: 'attractive' as ContentStyle,
    topic: surveySet.topicBaits.find(bait => bait.style === 'attractive')!
  };

  const genzRow = {
    style: 'genz' as ContentStyle,
    topic: surveySet.topicBaits.find(bait => bait.style === 'genz')!
  };

  return (
    <div className="space-y-6 my-6 animate-fade-in">
      <h2 className="text-3xl font-bold mb-6">{surveySet.name}</h2>

      {/* Validation alert */}
      {showValidationAlert && !isValid && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="ml-2">
            {missingSelections.contentItems.length > 0 && (
              <div>
                <strong>Missing content selections: </strong>
                {missingSelections.contentItems.length > 3
                  ? `${missingSelections.contentItems.length} items need selection`
                  : missingSelections.contentItems.join(', ')}
              </div>
            )}
            {missingSelections.topic && (
              <div>
                <strong>Please select one topic</strong> from the available options
              </div>
            )}
          </AlertDescription>
        </Alert>
      )}

      {/* Content rows by style */}
      <ContentRow
        style={simpleRow.style}
        topicTitle={simpleRow.topic.title}
        topicId={simpleRow.topic.id}
        contentItems={surveySet.contentItems}
        onSelectContent={handleSelectContent}
        onSelectTopic={handleSelectTopic}
        selectedItems={selectedItems}
        selectedTopicId={selectedTopicId}
      />

      <ContentRow
        style={attractiveRow.style}
        topicTitle={attractiveRow.topic.title}
        topicId={attractiveRow.topic.id}
        contentItems={surveySet.contentItems}
        onSelectContent={handleSelectContent}
        onSelectTopic={handleSelectTopic}
        selectedItems={selectedItems}
        selectedTopicId={selectedTopicId}
      />

      <ContentRow
        style={genzRow.style}
        topicTitle={genzRow.topic.title}
        topicId={genzRow.topic.id}
        contentItems={surveySet.contentItems}
        onSelectContent={handleSelectContent}
        onSelectTopic={handleSelectTopic}
        selectedItems={selectedItems}
        selectedTopicId={selectedTopicId}
      />

      <div className="flex justify-end mt-8">
        <Button
          onClick={handleSubmit}
          className="text-lg px-8 py-6 font-medium hover:shadow-lg transition-all"
        >
          Next Set
        </Button>
      </div>
    </div>
  );
};

export default SurveySet;
