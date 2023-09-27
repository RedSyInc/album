import {
    Show,
    SimpleShowLayout,
    TextField,
    ReferenceManyField,
    SingleFieldList,
    ImageField,
    TopToolbar,
    Pagination,
} from 'react-admin';
import {BackButton} from "./components/BackButton/BackButton";

export const Photos: React.FC = () => (
    <Show actions={<TopToolbar><BackButton/></TopToolbar>}>
        <SimpleShowLayout>
            <TextField source="title"/>
            <ReferenceManyField
                reference="photos"
                target="albumId"
                label="Photos"
                perPage={10}
                pagination={<Pagination/>}
            >
                <SingleFieldList linkType={false}>
                    <ImageField source="thumbnailUrl"
                                sx={{'& img': {maxWidth: 100}}}
                    />
                </SingleFieldList>
            </ReferenceManyField>
        </SimpleShowLayout>
    </Show>
);