package io.github.jama.application.repository.search;

import io.github.jama.application.domain.Region;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Region entity.
 */
public interface RegionSearchRepository extends ElasticsearchRepository<Region, Long> {
}
