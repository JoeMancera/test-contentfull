import React, { useState, useMemo, useRef } from 'react'
import { createAutocomplete } from '@algolia/autocomplete-core'
import { getProjects } from '../../utils/projects'
import { ListItemSearch } from '../ListItemSearch'
import { FormSearch, InputSearch, PanelResults, ListResults } from './styles'

export const Search = (props) => {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false,
  })

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: 'Search for a project',
        onStateChange: ({ state }) => setAutocompleteState(state), //Callback llamado cuando se ejecute el autocomplete
        getSources: () => [
          {
            sourceId: 'projects-contenful-api',
            getItems: ({ query }) => {
              if (!!query) {
                return getProjects({ query })
              }
              return []
            },
          },
        ],
        ...props,
      }),
    [props]
  )

  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: formRef.current,
  })

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  })

  return (
    <FormSearch ref={formRef} {...formProps}>
      <div>
        <InputSearch
          ref={inputRef}
          type="text"
          placeholder="Search"
          {...inputProps}
        />
      </div>
      {autocompleteState.isOpen && (
        <PanelResults ref={panelRef} {...autocomplete.getPanelProps()}>
          {autocompleteState.collections.map((collection, index) => {
            const { items } = collection
            return (
              <section key={`section-${index}`}>
                {items.length > 0 && (
                  <ListResults {...autocomplete.getListProps()}>
                    {items.map((item, index) => {
                      return (
                        <ListItemSearch key={`item-${index}`} item={item} />
                      )
                    })}
                  </ListResults>
                )}
              </section>
            )
          })}
        </PanelResults>
      )}
    </FormSearch>
  )
}
